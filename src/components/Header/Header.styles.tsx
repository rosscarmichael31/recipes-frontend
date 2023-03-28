import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Title = styled.h1`
  all: unset;
  font-family: "Gloock-Regular";
  font-weight: 100;
  font-size: 3.2em;

  /* margin-left: 0.5em; */
`;

const LogoImage = styled.img`
  height: 6em;
`;

const Header = styled.div`
  width: 100vw;
  background-color: #586e79;
  border-bottom: solid 0.2em #3b484f;
  position: sticky;
`;

const HeaderLink = styled(Link)`
  cursor: pointer;

  color: #f7f2dc;

  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;
`;

const LogoAndOthers = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FavouriteSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
  cursor: pointer;
  color: #f7f2dc;
  height: 0.7em;
  width: 0.7em;
  border-radius: 50%;
  padding: 0.4em;
  font-size: 1.8em;
  margin-left: 1.1em;
  background-color: #39454b;
  &:hover {
    background-color: #415058;
  }
`;

const Heart = styled(CiHeart)`
  color: #f7f2dc;
  font-size: 0.8em;
  margin-top: 0.4em;
`;

const RightSide = styled.div`
  display: flex;
`;

const styles = {
  Title,
  LogoImage,
  Header,
  HeaderLink,
  LogoAndOthers,
  FavouriteSelect,
  Heart,
  RightSide,
  FavWrapper,
};

export default styles;
