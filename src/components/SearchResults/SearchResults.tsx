import { Recipes } from "../../types";
import { RecipeResult } from "../RecipeResult/RecipeResult";
import s from "./SearchResults.styles";
import salad from "../../images/salad-transparent.gif";
import warning from "../../images/warning-45-512.png";

interface Props {
  recipesResults: Recipes;
  totalPages: string | null;
  recipesError: boolean;
  recipesLoading: boolean;
  firstTimeLoading: boolean;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  retrieveRecipes: (pn: number) => void;
  ingredients: string[];
  fillerRecipesIds: string[];
}

export const SearchResults: React.FC<Props> = ({
  recipesResults,
  totalPages,
  recipesError,
  recipesLoading,
  firstTimeLoading,
  setCurrentPage,
  currentPage,
  retrieveRecipes,
  ingredients,
  fillerRecipesIds,
}) => {
  const handleNext = () => {
    retrieveRecipes(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    retrieveRecipes(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };
  const content = recipesLoading ? (
    <s.LoadingScreen>
      <s.IconForMessages src={salad} alt={"Loading"} />
      Finding recipes...
    </s.LoadingScreen>
  ) : recipesError ? (
    <s.ErrorScreen>
      <s.IconForMessages src={warning} alt={"Error"} />
      An error has occurred!
    </s.ErrorScreen>
  ) : firstTimeLoading ? (
    <s.StartScreen>Enter some ingredients to find recipes</s.StartScreen>
  ) : recipesResults.length === 0 ? (
    <s.StartScreen>
      {/* <s.IconForMessages src={sad} alt={"No recipes sad face"} /> */}
      No recipes found!
    </s.StartScreen>
  ) : (
    <>
      <s.HeadingContainer>
        <s.Heading>Recipes you can make...</s.Heading>
        <s.NavButtonsContainer>
          {totalPages != null && currentPage > 0 ? (
            <s.DifferentPage onClick={handlePrev}>
              <s.Previous />
            </s.DifferentPage>
          ) : (
            <s.PreviousInvalid />
          )}
          {totalPages != null && (
            <s.PageNumber>
              {currentPage + 1} / {totalPages}
            </s.PageNumber>
          )}{" "}
          {totalPages != null && currentPage < parseInt(totalPages) - 1 ? (
            parseInt(totalPages) !== 1 && (
              <s.DifferentPage onClick={handleNext}>
                <s.Next />
              </s.DifferentPage>
            )
          ) : (
            <s.NextInvalid />
          )}
        </s.NavButtonsContainer>
      </s.HeadingContainer>
      <s.RecipesContainer>
        <s.ResultsContainer>
          {recipesResults.map((recipe) => (
            <RecipeResult
              recipe={recipe}
              key={recipe.name}
              recipes={recipesResults}
              ingredients={ingredients}
              fillerRecipesIds={fillerRecipesIds}
            />
          ))}
        </s.ResultsContainer>
      </s.RecipesContainer>
    </>
  );
  return <s.SearchResults>{content}</s.SearchResults>;
};
