import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1em;
  margin-left: 1em;
  border-radius: 0.25em;
`;

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  background-color: #606648;
  width: 100%;
  height: 100%;
  margin-top: 1em;
  margin-right: 1em;
  padding: 0.5em 1em 1em 1em;
  margin-bottom: 1em;
  border-radius: 0.25em;
`;

const RecipeSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  border-radius: 0.25em;
  width: 100%;
`;

const SuggestedRecipesWrapper = styled.div`
  width: 45em;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const PageInfoText = styled.div`
  all: unset;
  font-size: 4em;
  padding: 0.5em;
  font-weight: 100;
  font-size: 2em;
  margin-left: 1em;
`;

const LoadingScreen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.1em;
`;

const ErrorScreen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.1em;
`;

const IconForMessages = styled.img`
  height: 5em;
  margin-bottom: 2em;
`;

const styles = {
  IconForMessages,
  LoadingScreen,
  ErrorScreen,
  PageWrapper,
  RecipeWrapper,
  RecipeSummaryWrapper,
  SuggestedRecipesWrapper,
  PageInfoText,
};
export default styles;
