import styled from "styled-components";

const TextWrapper = styled.div`
  /* padding-left: 1.3em; */
  &:before {
    content: "\n";
    white-space: pre-line;
  }
`;

const HeadingWrapper = styled.p`
  /* font-weight: 300; */
  padding: 0;
  margin: 0;
`;

const IndividualDietaryContainer = styled.div`
  margin-top: 0.1em;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 0.5em;
  vertical-align: middle;
`;

const styles = {
  TextWrapper,
  HeadingWrapper,
  IndividualDietaryContainer,
  Icon,
};

export default styles;
