import styled from "styled-components";

const Recipe = styled.button`
  all: unset;
  padding-top: 1em;
  cursor: pointer;
  display: block;
  width: calc(100% - 1em);
  border-radius: 0.25em;
  &:hover {
    background-color: #dadada;
  }
`;

const RecipeName = styled.h4`
  all: unset;
  margin: 0em 0 0.5em 1em;
  font-family: "Gloock-Regular";
  font-weight: 100;
  font-size: 1.2em;
  margin-left: 1em;
`;

const RecipePic = styled.img`
  height: 10em;
  margin-left: 1em;
`;

const RecipeDesc = styled.div`
  margin: 1em;
  max-width: inherit;
  white-space: nowrap;
  /* display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IngredientNumbers = styled.div`
  margin: 0 1em 1em 1em;
`;

const RecipeResultTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RecipeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PicAndContent = styled.div`
  display: flex;
  width: 100%;
`;

const Dietry = styled.div`
  margin-left: 1.2em;
`;

const RecipeInfoContainer = styled.div`
  font-size: 1em;
  display: flex;
  align-items: center;
  margin: 0.5em 0 0 1.2em;
  margin-top: 0.15em;
`;

const TextWrapper = styled.div`
  padding-left: 0.3em;
`;

const IconWrapper = styled.div`
  margin-right: 0.3em;
`;

const styles = {
  Recipe,
  RecipeName,
  RecipePic,
  RecipeDesc,
  IngredientNumbers,
  RecipeResultTop,
  PicAndContent,
  RecipeContent,
  Dietry,
  RecipeInfoContainer,
  TextWrapper,
  IconWrapper,
};

export default styles;
