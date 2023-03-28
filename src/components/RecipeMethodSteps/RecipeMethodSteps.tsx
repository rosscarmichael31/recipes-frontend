import s from "./RecipeMethodSteps.styles";

interface Props {
  method: string;
}

export const RecipeMethodSteps: React.FC<Props> = ({ method }) => {
  const methodArray = method.split("$");
  methodArray.shift();
  return (
    <s.MethodWrapper>
      <s.MethodTitle>Method</s.MethodTitle>
      <s.MethodContainer>
        {methodArray?.map((step, methodIndex) => (
          <s.MethodStep key={methodIndex}>{step}</s.MethodStep>
        ))}
      </s.MethodContainer>
    </s.MethodWrapper>
  );
};
