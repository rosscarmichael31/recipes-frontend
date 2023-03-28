import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { FavouriteResults } from "../../components/FavouriteResults/FavouriteResults";
import { Recipes, Ingredient } from "../../types";
import s from "./Favourites.styles";

interface Props {
  fillerRecipesIds: string[];
}

export const Favourites: React.FC<Props> = ({ fillerRecipesIds }) => {
  const [recipesResults, setRecipesResults] = useState<Recipes>([]);
  const [ingredientsArray, setIngredientsArray] = useState<string[]>([]);
  const [recipesLoading, setRecipesLoading] = useState(false);
  const [recipesError, setRecipesError] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState<Boolean>(false);

  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
    useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  useEffect(() => {
    const fetchFavourites = async () => {
      let token: string = "";
      try {
        token = await getAccessTokenSilently();
      } catch (err) {
        console.warn("Please login");
      }
      setRecipesLoading(true);

      // Fetch favourites
      fetch(
        `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/favourites`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((recipes) => {
          setRecipesResults(recipes);
        })
        .catch((error) => {
          console.error(error);
          setRecipesError(true);
        })
        .finally(() => {
          setRecipesLoading(false);
        });

      // Fetch fridge
      fetch(`https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/fridge`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((fridge: Ingredient[]) => {
          const ingredients: string[] = fridge.map(
            (ingredient) => ingredient.name
          );
          setIngredientsArray(ingredients);
        })
        .catch((error) => {
          console.error(error);
          setRecipesError(true);
        })
        .finally(() => {
          setRecipesLoading(false);
        });
    };

    fetchFavourites();
  }, [getAccessTokenSilently, deleteFlag]);

  const deleteFavourite = async (recipeId: string) => {
    let idToken;
    idToken = await getAccessTokenSilently();

    fetch(`https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/favourites`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: recipeId,
      }),
    })
      .then(() => {
        setDeleteFlag(!deleteFlag);
      })
      .catch((error) => {
        console.error(error);
        setRecipesError(true);
      });
  };

  return (
    <s.Favourites>
      <FavouriteResults
        recipesResults={recipesResults}
        recipesError={recipesError}
        recipesLoading={recipesLoading}
        ingredients={ingredientsArray}
        deleteFavourite={deleteFavourite}
        fillerRecipesIds={fillerRecipesIds}
      />
    </s.Favourites>
  );
};
