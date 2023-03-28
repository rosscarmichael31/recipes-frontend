import { RxArrowRight } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";

import styled from "styled-components";

const TitleSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const LabelWrapper = styled.label`
  position: relative;
`;

const LabelTitle = styled.label`
  margin-left: 0.3rem;
  white-space: nowrap;
`;

const TitleInput = styled.input`
  font-family: "Nunito";
  font-weight: 300;
  font-size: 1em;
  border: none;
  padding: 1em;
  width: 15em;
  height: 0.25em;
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
`;

const Search = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25em;
  width: 2.25em;
  cursor: pointer;
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
  color: #f7f2dc;
  background-color: #39454b;
  &:hover {
    background-color: #415058;
  }
`;

const Arrow = styled(TfiSearch)`
  font-weight: 100;
  font-size: 1.2em;
`;

const styles = {
  LabelWrapper,
  LabelTitle,
  TitleInput,
  Search,
  Arrow,
  TitleSearchContainer,
};

export default styles;
