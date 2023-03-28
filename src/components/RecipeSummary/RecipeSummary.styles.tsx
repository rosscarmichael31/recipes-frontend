import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em;
`;

const RecipeImage = styled.img`
  width: 43em;
  height: 22.5em;
  object-fit: cover;
`;

const RecipeSummary = styled.div`
  flex-direction: row;
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  border-radius: 0.25em;
`;

const RecipeSideContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 0.25em;
`;

const RecipeInfoContainer = styled.div`
  font-size: 1em;
  display: flex;
  align-items: center;
  margin: 0.5em;
  margin-top: 0.15em;
  max-width: 10em;
  &:before {
    content: "\n";
    white-space: pre-line;
  }
`;

const TextWrapper = styled.div`
  padding-left: 0.3em;
  &:before {
    content: "\n";
    white-space: pre-line;
  }
  /* position: relative; */
`;

const IconWrapper = styled.div`
  margin-right: 0.3em;
`;

const HeadingWrapper = styled.p`
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const ButtonContainer = styled.div`
  /* position: relative; */
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 0.7em;
`;

const Button = styled.button`
  padding-left: 1em;
  border-radius: 0.35em;
  display: inline-flex;
  font-size: 1em;
  width: 15em;
  height: 3em;
  margin-right: 1em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  cursor: pointer;

  border: 0;
  align-items: center;
  justify-content: space-between;
  height: 2.25em;
  font-family: Nunito;
  cursor: pointer;

  /* border-radius: 0.25em; */
  color: #f7f2dc;
  background-color: #606648;
  &:hover {
    background-color: #717a55;
  }

  /* transition: all 0.3s ease; */
`;

const ButtonText = styled.p`
  margin: auto;
`;

const RecipeDesc = styled.div`
  display: flex;
  width: 100%;
`;

const Dietry = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  margin-bottom: 1em;
  font-weight: 600;
`;

const DietryTitle = styled.div`
  font-weight: 300;
`;

const styles = {
  RecipeSummary,
  RecipeImage,
  ImageContainer,
  RecipeInfoContainer,
  Button,
  TextWrapper,
  ButtonText,
  HeadingWrapper,
  RecipeSideContainer,
  ButtonContainer,
  IconWrapper,
  RecipeDesc,
  Dietry,
  DietryTitle,
};
export default styles;
