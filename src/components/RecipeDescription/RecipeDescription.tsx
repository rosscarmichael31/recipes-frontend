import s from "./RecipeDescription.styles";

interface Props {
  recipeDescription: string;
}

export const RecipeDescription: React.FC<Props> = ({ recipeDescription }) => {
  return <s.RecipeContainer>{recipeDescription}</s.RecipeContainer>;
};
