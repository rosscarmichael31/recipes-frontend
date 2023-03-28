import styled from "styled-components";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { BiError } from "react-icons/bi";

const SearchResults = styled.div`
  background-color: #f0f0f0;
  margin: 1em 1em 1em 0.5em;
  width: 100%;
  /* height: 100%; */
  height: calc(100vh - 6em - 2em - 0.2em);
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
  width: calc(100% - 26.6em);
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const DifferentPage = styled.button`
  all: unset;
  cursor: pointer;
  /* margin: 0.5em; */
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
  width: calc(100% - 27.6em);
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
  margin-right: 1em;
`;

const Next = styled(MdArrowForwardIos)`
  color: #f7f2dc;
  margin-left: 0.8em;
  padding: 0.25em 0.2em 0.25em 0.3em;
  &:hover {
    background-color: #767d57;
    border-radius: 50%;
  }
`;

const NextInvalid = styled(MdArrowForwardIos)`
  color: #8d9568;
  margin-left: 0.8em;
  padding: 0.25em 0.2em 0.55em 0.3em;
`;

const Previous = styled(MdArrowBackIosNew)`
  color: #f7f2dc;
  margin-right: 0.8em;
  padding: 0.25em 0.3em 0.25em 0.2em;
  &:hover {
    background-color: #767d57;
    border-radius: 50%;
  }
`;

const PreviousInvalid = styled(MdArrowBackIosNew)`
  color: #8d9568;
  margin-right: 0.8em;
  padding: 0.25em 0.3em 0.55em 0.2em;
`;

const PageNumber = styled.div`
  font-size: 0.9em;
  font-weight: 500;
  margin: 0 0 0.3em 0;
  color: #f7f2dc;
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
  PageNumber,
  PreviousInvalid,
  NextInvalid,
};

export default styles;
