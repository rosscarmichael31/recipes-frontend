import styled from "styled-components";
import { RxArrowRight } from "react-icons/rx";

const IngredientsSearch = styled.div`
  background-color: #606648;
  height: calc(100vh - 6em - 2em - 0.2em);
  margin: 1em 0.5em 0 1em;
  border-radius: 0.25em;
`;

const Heading = styled.h2`
  font-family: "Gloock-Regular";
  color: #f7f2dc;
  font-size: 1.5em;
  font-weight: 100;
  margin: 0.5em;
`;

const AutocompleteWrapper = styled.div`
  margin: 1em;
  display: flex;
  justify-content: space-between;
`;

const DeleteAll = styled.button`
  all: unset;
  background-color: #cd4732;
  &:hover {
    background-color: #dd5742;
  }
  width: 2em;
  height: 2em;
  margin-right: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #f7f2dc;
  border-radius: 50%;
`;

const IngredientsListWrapper = styled.div`
  margin: 1em;
  background-color: #ffff;
  background-color: #e9e9e9;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ListHeadingBodyWrapper = styled.div`
  margin: 1em;
  padding-top: 2.5em;
  border-radius: 0.25em;

  /* padding-top: 0em; */
  background-color: #ffff;
  background-color: #e9e9e9;

  height: calc(100% - 13.5em);
  max-height: calc(100% - 13.5em);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0 0.5em 0;
  background-color: #8d966a;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  margin-left: 1em;
  width: 22.6em;
  border-top-right-radius: 0.25em;
  border-top-left-radius: 0.25em;
  color: #f7f2dc;
`;

const ListHeading = styled.h3`
  all: unset;
  font-size: 1.14em;
  font-family: "Gloock-Regular";
  font-weight: 300;
  margin-left: 1em;
`;

const IngredientsList = styled.ul`
  all: unset;
  width: 100%;
`;

const Ingredient = styled.li`
  list-style-type: none;
  margin: 0.5em 0 0.5em 1em;
`;

const DeleteIngredient = styled.button`
  all: unset;
  cursor: pointer;
  margin-right: 1em;
`;

const IngredientWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Search = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.25em;
  cursor: pointer;
  width: 100%;
  width: 22.6em;
  border-radius: 0.25em;
  color: #f7f2dc;
  background-color: #8d966a;
  &:hover {
    background-color: #98a274;
  }
`;
const Arrow = styled(RxArrowRight)`
  font-weight: 100;
  font-size: 1.5em;
  margin-right: 0.5em;
`;

const ButtonText = styled.div`
  margin-left: 0.5em;
  font-size: 1.2em;
  font-weight: 400;
`;

const Error = styled.div`
  padding-top: 2em;
  margin-left: 1em;
`;

const styles = {
  IngredientsSearch,
  Heading,
  AutocompleteWrapper,
  DeleteAll,
  Ingredient,
  IngredientsList,
  IngredientsListWrapper,
  DeleteIngredient,
  IngredientWrapper,
  HeadingWrapper,
  ListHeading,
  ListHeadingBodyWrapper,
  SearchWrapper,
  Search,
  Arrow,
  ButtonText,
  Error,
};

export default styles;
