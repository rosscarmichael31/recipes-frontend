import styled from "styled-components";

const Autocomplete = styled.input`
  font-family: "Nunito";
  font-weight: 300;
  font-size: 1em;
  border: none;
  padding: 8px;
  width: 300px;
  border-radius: 0.25em;
`;

const NoAutocomplete = styled.div`
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  width: calc(300px + 1rem);
  position: absolute;
  background-color: white;
  z-index: 999;
  border-bottom-left-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
`;

const AutocompleteOptions = styled.ul`
  border-top-width: 0;
  list-style: none;
  margin: 0;
  max-height: 450px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);
  position: absolute;
  z-index: 999;
  border-bottom-left-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
`;

const Option = styled.li<{ selected: boolean }>`
  padding: 0.5em;
  cursor: pointer;
  &:hover {
  }
  background-color: ${(props) => (props.selected ? "#dadada" : "white")};
`;

const NotFound = styled.div`
  padding: 0.5em;
`;

const Select = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1.5em;
  height: 1.5em;
  color: #f7f2dc;
  border-radius: 50%;
  width: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.4em;
  background-color: #8d966a;
  &:hover {
    background-color: #98a274;
  }
`;

const AutocompleteWrapper = styled.div`
  display: flex;
`;

const styles = {
  NoAutocomplete,
  AutocompleteOptions,
  Autocomplete,
  Option,
  NotFound,
  Select,
  AutocompleteWrapper,
};

export default styles;
