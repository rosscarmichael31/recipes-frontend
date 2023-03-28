import { Recipes } from "../../types";
import { RecipeResult } from "../RecipeResult/RecipeResult";

import s from "./FavouriteResults.styles";
import warning from "../../images/warning-45-512.png";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  recipesResults: Recipes;
  recipesError: boolean;
  recipesLoading: boolean;
  ingredients: string[];
  deleteFavourite(recipeId: string): void;
  fillerRecipesIds: string[];
}

export const FavouriteResults: React.FC<Props> = ({
  recipesResults,
  recipesError,
  recipesLoading,
  ingredients,
  deleteFavourite,
  fillerRecipesIds,
}) => {
  const content = recipesError ? (
    <s.ErrorScreen>
      <s.IconForMessages src={warning} alt={"Error"} />
      An error has occurred!
    </s.ErrorScreen>
  ) : recipesResults.length === 0 ? (
    <s.StartScreen>Add some favourites and they'll appear here!</s.StartScreen>
  ) : (
    <>
      <s.HeadingContainer>
        <s.Heading>Your favourites...</s.Heading>
      </s.HeadingContainer>
      <s.RecipesContainer>
        <s.ResultsContainer>
          {recipesResults.map((recipe) => (
            <s.FavouriteContainer key={recipe.id}>
              <RecipeResult
                recipe={recipe}
                key={recipe.id}
                recipes={recipesResults}
                ingredients={ingredients}
                fillerRecipesIds={fillerRecipesIds}
              />
              <s.Button onClick={() => deleteFavourite(recipe.id)}>
                <AiFillHeart />
                <s.ButtonText>Remove from favourites</s.ButtonText>
              </s.Button>
            </s.FavouriteContainer>
          ))}
        </s.ResultsContainer>
      </s.RecipesContainer>
    </>
  );
  return <s.SearchResults>{content}</s.SearchResults>;
};
