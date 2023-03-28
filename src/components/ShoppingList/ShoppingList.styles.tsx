import styled, { keyframes } from "styled-components";

const ShoppingListContainer = styled.div`
  margin: 1em;
  background-color: #f0f0f0;
  /* background-color: #f7f2dc; */
  border-radius: 0.25em;
`;

const IngredientList = styled.ul`
  list-style: none;
  padding-left: 0;
  padding-top: 0.5em;
  max-height: 50vh;
  overflow-y: scroll;
  padding-bottom: 0.5em;
`;

const tickAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  appearance: none;
  border: 0.14em solid gray;
  border-radius: 0.3em;
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
  outline: none;
  cursor: pointer;

  &:checked {
    content: "✓";
    color: white;
    background-color: #8d966a;
    text-align: center;
    animation: ${tickAnimation} 0.3s linear;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #606648;
  }
`;

const ListItem = styled.li<{ isChecked: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  &:before {
    content: "";
    display: inline-block;
    margin: 1em;
    margin-left: 0;
  }
`;

const Button = styled.button`
  border-radius: 0.35em;
  display: inline-flex;
  font-size: 1em;
  width: 12em;
  height: 3em;
  margin-left: 1em;
  margin-top: 1em;
  margin-bottom: 1em;

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
`;

const ButtonText = styled.p`
  margin: auto;
`;

const styles = {
  CheckboxContainer,
  ShoppingListContainer,
  Checkbox,
  IngredientList,
  ListItem,
  Button,
  ButtonText,
};

export default styles;
