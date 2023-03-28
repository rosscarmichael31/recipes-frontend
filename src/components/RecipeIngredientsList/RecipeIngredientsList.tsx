import s from "./RecipeIngredientsList.styles";

interface Props {
  ingredientsAndQuantities: string;
}

export const RecipeIngredientsList: React.FC<Props> = ({
  ingredientsAndQuantities,
}) => {
  const ingredientsAndQuantitiesArray = ingredientsAndQuantities.split("$");
  ingredientsAndQuantitiesArray.shift();
  return (
    <s.IngredientsWrapper>
      <s.IngredientsTitle>Ingredients</s.IngredientsTitle>
      <s.IngredientsListContainer>
        {ingredientsAndQuantitiesArray.map((ingredient, ingredientIndex) => (
          <s.IngredientItem key={ingredientIndex}>
            {ingredient}
          </s.IngredientItem>
        ))}
      </s.IngredientsListContainer>
    </s.IngredientsWrapper>
  );
};
