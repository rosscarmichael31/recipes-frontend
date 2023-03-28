import styled from "styled-components";

const MethodTitle = styled.h3`
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

const MethodContainer = styled.ol`
  /* margin-left: 1.3em; */
  /* margin: 1em; */
  margin-right: 0.5em;
  /* max-width: 95%; */
`;

const MethodStep = styled.li`
  margin: initial;
  margin-bottom: 0.5em;
`;

const MethodWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 0.25em;
  margin-top: 1em;
`;

const styles = {
  MethodTitle,
  MethodContainer,
  MethodStep,
  MethodWrapper,
};
export default styles;
