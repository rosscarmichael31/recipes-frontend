import styled from "styled-components";

const IngredientsTitle = styled.h3`
  all: unset;
  font-family: "Gloock-Regular";
  font-weight: 100;
  font-size: 1.5em;
  background-color: #8d966a;
  color: #f7f2dc;
  display: flex;
  padding: 0.5em;
  width: calc(100%-2em);
  border-top-right-radius: 0.16em;
  border-top-left-radius: 0.16em;
`;

const IngredientsListContainer = styled.ul`
  list-style: circle;
  margin-left: 2.6em;
  margin-right: 0.5em;
  padding: 0;
`;

const IngredientItem = styled.li`
  margin-bottom: 0.5em;
`;

const IngredientsWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 0.25em;
  margin-top: 1em;
`;

const styles = {
  IngredientsListContainer,
  IngredientsTitle,
  IngredientItem,
  IngredientsWrapper,
};
export default styles;
