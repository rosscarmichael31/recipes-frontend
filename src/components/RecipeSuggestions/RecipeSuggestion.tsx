import s from "./RecipeSuggestion.styles";
import { TbChefHat, TbCarrot } from "react-icons/tb";
import { BiTimeFive, BiBowlHot } from "react-icons/bi";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Recipe } from "../../types";
import smarties from "../../images/smart-cookies.jpg";

interface Props {
  recipeId: string;
  recipeName: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  image: string;
  ingredients: string[];
  recipe: Recipe;
  parsedIngredients: string[];
}

export const RecipeSuggestion: React.FC<Props> = ({
  recipeId,
  recipeName,
  prepTime,
  cookTime,
  servings,
  image,
  recipe,
  parsedIngredients,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const recipes: string[] = window.location.pathname
      .replace("/recipe/", "")
      .replace(/\//g, "")
      .split("&");

    const index = recipes.indexOf(recipeId);
    if (index !== -1) {
      recipes.splice(0, 0, recipes.splice(index, 1)[0]);
    }
    navigate(
      `/recipe/${recipes[0]}&${recipes[1]}&${recipes[2]}&${recipes[3]}&${recipes[4]}&${recipes[5]}`
    );
  };

  const ingredientNames = recipe.ingredients.map(
    (ingredient: { id: string; name: string }) => ingredient.name
  );

  // let matchingIngredients: string[] = [];
  // parsedIngredients.forEach((ingredient) => {
  //   if (ingredientNames.includes(ingredient)) {
  //     if (!matchingIngredients.includes(ingredient)) {
  //       matchingIngredients.push(ingredient);
  //     }
  //   }
  // });

  return (
    <s.AllRecipesContainer onClick={handleClick}>
      <s.RecipeImage
        src={image === "lol" ? smarties : image}
        alt={recipeName}
      />
      <s.RecipeInfoDiv>
        <s.RecipeTitle>{recipeName}</s.RecipeTitle>
        <s.RecipeInfoContainer>
          <BiTimeFive />
          <s.TextWrapper>{prepTime}</s.TextWrapper>
        </s.RecipeInfoContainer>
        <s.RecipeInfoContainer>
          <TbChefHat />
          <s.TextWrapper>{cookTime}</s.TextWrapper>
        </s.RecipeInfoContainer>
        <s.RecipeInfoContainer>
          <BiBowlHot />
          <s.TextWrapper>{servings}</s.TextWrapper>
        </s.RecipeInfoContainer>
        <s.RecipeInfoContainer>
          <TbCarrot />
          <s.TextWrapper>{ingredientNames.length} ingredients</s.TextWrapper>
        </s.RecipeInfoContainer>
      </s.RecipeInfoDiv>
    </s.AllRecipesContainer>
  );
};
