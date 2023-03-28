import s from "./RecipePage.styles";
import { useState, useEffect } from "react";
import { RecipeIngredientsList } from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import { RecipeMethodSteps } from "../../components/RecipeMethodSteps/RecipeMethodSteps";
import { RecipeSummary } from "../../components/RecipeSummary/RecipeSummary";
import { RecipeSuggestion } from "../../components/RecipeSuggestions/RecipeSuggestion";
import { RecipeTitle } from "../../components/RecipePageTitle/RecipePageTitle";
import { Favourites, Recipe } from "../../types";
import { RecipeDescription } from "../../components/RecipeDescription/RecipeDescription";
import { MoreRecipesTitle } from "../../components/MoreRecipesTitle/MoreRecipesTitle";
import { useParams } from "react-router-dom";
import salad from "../../images/salad-transparent.gif";
import warning from "../../images/warning-45-512.png";
import { useAuth0 } from "@auth0/auth0-react";

export const RecipePage: React.FC = () => {
  const { recipeIds } = useParams<{ recipeIds: string }>();
  const [favourites, setFavourites] = useState<Favourites>({});

  const [recipe, setRecipe] = useState<Recipe>();
  const [fiveRecipes, setFiveRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState(true);
  const [ingredientsArray, setIngredientsArray] = useState<string[]>([]);
  const [parsedIngredients, setParsedIngredients] = useState<string[]>([]);
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

  useEffect(() => {
    setLoading(true);
    setError(false);
    const recipeIdsList = recipeIds?.split("&");
    if (recipeIdsList) {
      Promise.all([
        fetch(
          `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/recipes/${recipeIdsList[0]}`
        ),
        fetch(
          `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/recipes/${recipeIdsList[1]}`
        ),
        fetch(
          `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/recipes/${recipeIdsList[2]}`
        ),
        fetch(
          `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/recipes/${recipeIdsList[3]}`
        ),
        fetch(
          `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/recipes/${recipeIdsList[4]}`
        ),
        fetch(
          `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/recipes/${recipeIdsList[5]}`
        ),
      ])
        .then(
          ([
            mainRecipe,
            sideRecipe1,
            sideRecipe2,
            sideRecipe3,
            sideRecipe4,
            sideRecipe5,
          ]) => {
            return [
              mainRecipe.json(),
              sideRecipe1.json(),
              sideRecipe2.json(),
              sideRecipe3.json(),
              sideRecipe4.json(),
              sideRecipe5.json(),
            ];
          }
        )
        .then(async (recipes) => {
          setRecipe(await recipes[0]);
          setFiveRecipes([
            await recipes[1],
            await recipes[2],
            await recipes[3],
            await recipes[4],
            await recipes[5],
          ]);
          return recipes[0];
        })
        .then((recipe) => {
          setIngredientsArray(
            recipe.ingredients.map(
              (ingredient: { id: string; name: string }) => ingredient.name
            )
          );
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [recipeIds]);

  useEffect(() => {
    const fetchFavourites = async () => {
      let idToken: string = "";

      try {
        idToken = await getAccessTokenSilently();
      } catch (err) {
        console.warn("Please login");
      }

      if (isAuthenticated) {
        fetch(
          `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/favourites`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            const favouritesObj: Favourites = {};
            data.forEach((favourite: { id: string }) => {
              favouritesObj[favourite.id] = true;
            });
            setFavourites(favouritesObj);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });

        fetch(`https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/fridge`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${idToken}`,
            "Content-type": "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((ingredients) => {
            return ingredients.map(
              (ingredient: { id: string; name: string }) => ingredient.name
            );
          })
          .then((ingredientNames) => {
            setParsedIngredients(ingredientNames);
          });
      }
    };

    fetchFavourites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mutateFavourites = async (recipeId: string) => {
    let idToken;

    if (!isAuthenticated) {
      await loginWithRedirect();
      return;
    }

    idToken = await getAccessTokenSilently();

    if (favourites[recipeId]) {
      fetch(
        `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/favourites`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${idToken}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            id: recipeId,
          }),
        }
      )
        .then(() => {
          const newFavourites = { ...favourites };
          delete newFavourites[recipeId];
          setFavourites(newFavourites);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    } else {
      fetch(
        `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/favourites`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            id: recipeId,
          }),
        }
      )
        .then(() => {
          setFavourites({ ...favourites, [recipeId]: true });
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    }
  };

  const renderRecipe = () => {
    if (recipe) {
      const recipeId = recipe.id;
      const name = recipe.name;
      const ingredientsAndQuantities = recipe.ingredientsAndQuantities;
      const description = recipe.description;
      const method = recipe.method;
      const prepTime = recipe.prepTime;
      const cookTime = recipe.cookTime;
      const servings = recipe.servings;
      const image = recipe.image;
      const vegetarian = recipe.vegetarian;
      const vegan = recipe.vegan;
      const glutenFree = recipe.glutenFree;

      return loading ? (
        <s.LoadingScreen>
          <s.IconForMessages src={salad} alt={"Loading recipes"} />
          Loading recipe...
        </s.LoadingScreen>
      ) : error ? (
        <s.ErrorScreen>
          <s.IconForMessages src={warning} alt={"Error occured"} />
          An error has occurred!
        </s.ErrorScreen>
      ) : (
        <s.PageWrapper>
          <s.RecipeWrapper>
            <RecipeTitle recipeName={name} />
            <s.RecipeSummaryWrapper>
              <RecipeSummary
                recipeId={recipeId}
                prepTime={prepTime}
                cookTime={cookTime}
                servings={servings}
                image={image}
                recipeName={name}
                vegetarian={vegetarian}
                vegan={vegan}
                glutenFree={glutenFree}
                ingredients={ingredientsArray}
                mutateFavourites={mutateFavourites}
                favourites={favourites}
                parsedIngredients={parsedIngredients}
              />
              <RecipeDescription recipeDescription={description} />
            </s.RecipeSummaryWrapper>
            <RecipeIngredientsList
              ingredientsAndQuantities={ingredientsAndQuantities}
            />
            <RecipeMethodSteps method={method} />
          </s.RecipeWrapper>
          <s.SuggestedRecipesWrapper>
            <MoreRecipesTitle />
            <s.RecipeSummaryWrapper>
              {fiveRecipes.map((recipe) => {
                return (
                  <RecipeSuggestion
                    key={recipe.id}
                    recipeId={recipe.id}
                    recipeName={recipe.name}
                    prepTime={recipe.prepTime}
                    cookTime={recipe.cookTime}
                    servings={recipe.servings}
                    image={recipe.image}
                    ingredients={ingredientsArray}
                    recipe={recipe}
                    parsedIngredients={parsedIngredients}
                  />
                );
              })}
            </s.RecipeSummaryWrapper>
          </s.SuggestedRecipesWrapper>
        </s.PageWrapper>
      );
    }
  };

  return <>{renderRecipe()}</>;
};
