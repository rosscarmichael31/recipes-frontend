import styled from "styled-components";

const TitleContainer = styled.div`
  display: inline-block;
  padding-bottom: 0.5em;
  background-color: #606648;
  border-top-right-radius: 0.25em;
  border-top-left-radius: 0.25em;
`;

const TitleHeader = styled.h2`
  all: unset;
  color: #f7f2dc;
  font-family: "Gloock-Regular";
  font-weight: 100;
  font-size: 1.8em;
  display: flex;
  align-items: center;
  margin-left: 0.5em;
  margin-top: 0.15em;
`;

const styles = {
  TitleContainer,
  TitleHeader,
};

export default styles;
