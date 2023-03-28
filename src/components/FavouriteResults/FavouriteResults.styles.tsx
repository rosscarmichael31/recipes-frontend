import styled from "styled-components";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { BiError } from "react-icons/bi";

const SearchResults = styled.div`
  background-color: #f0f0f0;
  margin: 1em;
  width: 100%;
  height: calc(100vh - 8.2em);
  border-radius: 0.25em;
`;

const Heading = styled.h2`
  font-family: "Gloock-Regular";
  font-size: 1.5em;
  font-weight: 100;
  margin: 0.5em;
`;

const RecipesContainer = styled.div`
  position: absolute;
  height: calc(100vh - 6em - 2em);
  overflow-y: scroll;
  width: calc(100% - 1em);
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const DifferentPage = styled.button`
  all: unset;
  cursor: pointer;
  margin: 0.5em;
`;

const IconForMessages = styled.img`
  height: 5em;
  margin-bottom: 2em;
`;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0 0.5em 0;
  justify-content: space-between;
  position: absolute;
  height: 2.5em;
  width: calc(100% - 2em);
  z-index: 1;
  border-top-right-radius: 0.25em;
  border-top-left-radius: 0.25em;
  color: #f7f2dc;
  background-color: #606648;
`;
const NavButtonsContainer = styled.div`
  padding-top: 0.3em;
  font-size: 1.4em;
  display: flex;
  align-items: center;
`;

const Next = styled(MdArrowForwardIos)`
  color: #ffffff;
  padding: 0.25em 0.2em 0.25em 0.3em;
  &:hover {
    background-color: #767d57;
    border-radius: 50%;
  }
`;
const Previous = styled(MdArrowBackIosNew)`
  color: #ffffff;
  padding: 0.25em 0.3em 0.25em 0.2em;
  &:hover {
    background-color: #767d57;
    border-radius: 50%;
  }
`;

const Error = styled(BiError)``;

const StartScreen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.1em;
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

const ResultsContainer = styled.div`
  margin-top: 3.5em;
  width: calc(100%);
`;

const ButtonContainer = styled.div`
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
  width: calc(100% - 2em);
  height: 3em;
  margin-left: 0.5em;
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

const FavouriteContainer = styled.div``;

const styles = {
  SearchResults,
  Heading,
  RecipesContainer,
  DifferentPage,
  IconForMessages,
  HeadingContainer,
  NavButtonsContainer,
  Next,
  Previous,
  Error,
  ErrorScreen,
  StartScreen,
  LoadingScreen,
  ResultsContainer,
  ButtonContainer,
  Button,
  ButtonText,
  FavouriteContainer,
};

export default styles;
