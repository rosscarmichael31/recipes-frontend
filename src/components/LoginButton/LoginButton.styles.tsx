import styled from "styled-components";
import { SlLogin } from "react-icons/sl";

const Login = styled.button`
  all: unset;
  cursor: pointer;
  color: #f7f2dc;

  height: 0.7em;
  width: 0.7em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;
  font-size: 1.8em;
  margin-left: 0.4em;
  background-color: #39454b;
  &:hover {
    background-color: #415058;
  }
`;

const Icon = styled(SlLogin)`
  margin-right: 0.12em;
`;

const styles = { Login, Icon };

export default styles;
