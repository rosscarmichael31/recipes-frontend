import { useState } from "react";
import { IngredientsSearch } from "../../components/IngredientsSearch/IngredientsSearch";
import { SearchResults } from "../../components/SearchResults/SearchResults";
import { Recipes } from "../../types";
import s from "./Home.styles";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  recipesResults: Recipes;
  setRecipesResults: (recipe: Recipes) => void;
  recipesError: boolean;
  recipesLoading: boolean;
  firstTimeLoading: boolean;
  setFirstTimeLoading: (loading: boolean) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  totalPages: string | null;
  setRecipesLoading: (loading: boolean) => void;
  setTotalPages: (totalPages: string | null) => void;
  setRecipesError: (error: boolean) => void;
  retrieveTitleRecipes: (pn: number) => void;
  setIsButtonClicked: (button: boolean) => void;
  isButtonClicked: boolean;
  fillerRecipesIds: string[];
  setFillerRecipesIds: (filler: string[]) => void;
}

export const Home: React.FC<Props> = ({
  recipesResults,
  setRecipesResults,
  recipesError,
  recipesLoading,
  firstTimeLoading,
  setCurrentPage,
  currentPage,
  totalPages,
  setTotalPages,
  setRecipesLoading,
  setRecipesError,
  setFirstTimeLoading,
  retrieveTitleRecipes,
  setIsButtonClicked,
  isButtonClicked,
  fillerRecipesIds,
  setFillerRecipesIds,
}) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientsToFetch, setIngredientsToFetch] = useState<string[]>([]);

  const addSingularsBack = (
    chosenIngredients: string[],
    numberOfIngredients: number
  ) => {
    for (let i = 0; i < numberOfIngredients; i++) {
      if (chosenIngredients[i] === "eggs") {
        chosenIngredients.push("egg white");
        chosenIngredients.push("egg whites");
        chosenIngredients.push("egg yolk");
        chosenIngredients.push("egg yolks");
      }
      chosenIngredients.push(chosenIngredients[i].slice(0, -1));
      chosenIngredients.push(chosenIngredients[i].slice(0, -2));
      chosenIngredients.push(chosenIngredients[i].slice(0, -3) + "y");
    }
  };

  const retrieveRecipes = (pageNumber: number) => {
    // setIngswithIds(
    //   selections?.filter((ingredient) => ingredients.includes(ingredient.name))
    // );

    let ingredientsToFetch: string[] = [];
    ingredients.forEach((ingredient) => {
      ingredientsToFetch.push(ingredient);
    });
    addSingularsBack(ingredientsToFetch, ingredientsToFetch.length);
    setIngredientsToFetch(ingredientsToFetch);

    setRecipesLoading(true);

    fetch(
      `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/recipes?page=${pageNumber}&size=10&ingredientNames=${ingredientsToFetch.join(
        ","
      )}`,
      { method: "GET" }
    )
      .then((response) => {
        setTotalPages(response.headers.get("Total-Pages"));
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
  };

  return (
    <s.Home>
      <IngredientsSearch
        setFirstTimeLoading={setFirstTimeLoading}
        setCurrentPage={setCurrentPage}
        retrieveRecipes={retrieveRecipes}
        setIngredients={setIngredients}
        ingredients={ingredients}
        setIsButtonClicked={setIsButtonClicked}
        setFillerRecipesIds={setFillerRecipesIds}
      />
      <SearchResults
        recipesResults={recipesResults}
        totalPages={totalPages}
        recipesError={recipesError}
        recipesLoading={recipesLoading}
        firstTimeLoading={firstTimeLoading}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        retrieveRecipes={
          isButtonClicked ? retrieveTitleRecipes : retrieveRecipes
        }
        ingredients={ingredientsToFetch}
        fillerRecipesIds={fillerRecipesIds}
      />
    </s.Home>
  );
};
