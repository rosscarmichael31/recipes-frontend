import styled from "styled-components";

const ClearForm = styled.div`
  margin: 1em;
  padding: 1em;
  background-color: #f0f0f0;
  border-radius: 0.25em;
`;

const Body = styled.div`
  margin-bottom: 2em;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Cancel = styled.button`
  border-radius: 0.35em;
  display: inline-flex;
  font-size: 1em;
  width: 5em;
  height: 3em;
  margin-top: 0.3em;
  cursor: pointer;
  border: 0;
  align-items: center;
  justify-content: center;
  height: 2.25em;
  font-family: Nunito;
  cursor: pointer;
  color: #f7f2dc;
  background-color: #606648;
  &:hover {
    background-color: #717a55;
  }
`;

const Delete = styled.button`
  border-radius: 0.35em;
  display: inline-flex;
  font-size: 1em;
  width: 5em;
  height: 3em;
  margin-top: 0.3em;
  cursor: pointer;

  border: 0;
  align-items: center;
  justify-content: center;
  height: 2.25em;
  font-family: Nunito;
  cursor: pointer;
  color: #f7f2dc;
  background-color: #cd4732;
  &:hover {
    background-color: #dd5742;
  }
`;

const styles = { ClearForm, Cancel, Delete, Body, Buttons };

export default styles;
