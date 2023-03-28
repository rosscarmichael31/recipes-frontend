import { useNavigate } from "react-router-dom";
import { Recipe, Recipes } from "../../types";
import s from "./RecipeResult.styles";
import { DietaryInfo } from "../DietaryInfo/DietaryInfo";
import { TbChefHat } from "react-icons/tb";
import { BiTimeFive, BiBowlHot } from "react-icons/bi";
import smarties from "../../images/smart-cookies.jpg";

interface Props {
  recipe: Recipe;
  recipes: Recipes;
  ingredients: string[];
  fillerRecipesIds: string[];
}

export const RecipeResult: React.FC<Props> = ({
  recipe,
  recipes,
  ingredients,
  fillerRecipesIds,
}) => {
  const sideRecipeIds = recipes
    .filter((r) => r.id !== recipe.id)
    .map((r) => r.id)
    .slice(0, 5);

  if (sideRecipeIds.length < 5) {
    const remainingFillerIds = fillerRecipesIds.slice(
      0,
      6 - sideRecipeIds.length
    );
    sideRecipeIds.push(...remainingFillerIds);
  }

  const ingredientNames = recipe.ingredients.map(
    (ingredient: { id: string; name: string }) => ingredient.name
  );

  const filteredIngredients: string[] = ingredients.filter((ingredient) =>
    ingredientNames.includes(ingredient)
  );

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(
      `/recipe/${recipe.id}&${sideRecipeIds[0]}&${sideRecipeIds[1]}&${sideRecipeIds[2]}&${sideRecipeIds[3]}&${sideRecipeIds[4]}`
    );
  };

  return (
    <s.Recipe onClick={handleClick}>
      <s.PicAndContent>
        <s.RecipePic
          src={recipe.image === "lol" ? smarties : recipe.image}
          alt={recipe.name}
        />
        <s.RecipeContent>
          <s.RecipeResultTop>
            <s.RecipeName>{recipe.name}</s.RecipeName>
            <s.IngredientNumbers>
              You have {filteredIngredients.length} out of{" "}
              {ingredientNames.length} ingredients in this recipe
            </s.IngredientNumbers>
          </s.RecipeResultTop>
          <s.RecipeInfoContainer>
            <s.IconWrapper>
              <BiTimeFive />
            </s.IconWrapper>
            <s.TextWrapper>{recipe.prepTime}</s.TextWrapper>
          </s.RecipeInfoContainer>
          <s.RecipeInfoContainer>
            <s.IconWrapper>
              <TbChefHat />
            </s.IconWrapper>
            <s.TextWrapper>{recipe.cookTime}</s.TextWrapper>
          </s.RecipeInfoContainer>
          <s.RecipeInfoContainer>
            <s.IconWrapper>
              <BiBowlHot />
            </s.IconWrapper>
            <s.TextWrapper>{recipe.servings}</s.TextWrapper>
          </s.RecipeInfoContainer>
          <s.Dietry>
            {(recipe.vegan || recipe.vegetarian || recipe.glutenFree) && (
              <DietaryInfo
                vegan={recipe.vegan}
                vegetarian={recipe.vegetarian}
                glutenFree={recipe.glutenFree}
              />
            )}
          </s.Dietry>
        </s.RecipeContent>
      </s.PicAndContent>
      <s.RecipeDesc>{recipe.description}</s.RecipeDesc>
    </s.Recipe>
  );
};
