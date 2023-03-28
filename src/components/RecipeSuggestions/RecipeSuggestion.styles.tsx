import styled from "styled-components";

const AllRecipesContainer = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #f0f0f0;
  &:hover {
    background-color: #dadada;
    border-radius: 0.25em;
  }
  border-bottom-left-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
`;

const RecipeImage = styled.img`
  width: 16em;
  height: 9em;
  object-fit: contain;
  margin: 1em 0.3em 1em 0.5em;
`;

const RecipeInfoDiv = styled.div`
  margin-top: 0.8em;
  margin-bottom: 0.8em;
  margin-left: 0.3em;
  margin-right: 0.3em;
  min-height: 9em;
`;

const RecipeTitle = styled.h4`
  all: unset;
  font-family: "Gloock-Regular";
  font-weight: 100;
  font-size: 1em;
`;

const RecipeInfoContainer = styled.div`
  font-size: 0.8em;
  display: flex;
  align-items: center;
  &:before {
    content: "\n";
    white-space: pre-line;
  }
`;

const TextWrapper = styled.div`
  padding-left: 0.3em;
  padding-bottom: 0.2em;
`;

const styles = {
  RecipeInfoContainer,
  RecipeImage,
  RecipeTitle,
  RecipeInfoDiv,
  TextWrapper,
  AllRecipesContainer,
};
export default styles;
