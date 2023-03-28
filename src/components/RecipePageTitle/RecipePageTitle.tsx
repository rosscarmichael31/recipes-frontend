import s from "./RecipePageTitle.styles";

interface Props {
  recipeName: string;
}

export const RecipeTitle: React.FC<Props> = ({ recipeName }) => {
  return (
    <>
      <s.TitleContainer>
        <s.TitleHeader>{recipeName}</s.TitleHeader>
      </s.TitleContainer>
    </>
  );
};
