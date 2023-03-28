import s from "./Header.styles";
import jesus from "../../images/JesusInAChefsHatCloserTransparent.png";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";
import { TitleSearch } from "../TitleSearch/TitleSearch";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  setWordInput: (word: string) => void;
  setFirstTimeLoading: (firstTimeLoading: boolean) => void;
  setCurrentPage: (page: number) => void;
  retrieveRecipes: (pn: number) => void;
  setIsButtonClicked: (button: boolean) => void;
}

export const Header: React.FC<Props> = ({
  setWordInput,
  setFirstTimeLoading,
  setCurrentPage,
  retrieveRecipes,
  setIsButtonClicked,
}) => {
  const { isAuthenticated } = useAuth0();
  return (
    <s.Header>
      <s.LogoAndOthers>
        <s.HeaderLink to={"/"}>
          <s.LogoImage src={jesus} alt="Logo: Jesus with a chef's hat on" />
          <s.Title>The Last Supper</s.Title>
        </s.HeaderLink>
        <s.RightSide>
          <TitleSearch
            setWordInput={setWordInput}
            setFirstTimeLoading={setFirstTimeLoading}
            setCurrentPage={setCurrentPage}
            retrieveRecipes={retrieveRecipes}
            setIsButtonClicked={setIsButtonClicked}
          />
          <s.FavWrapper>
            {isAuthenticated && (
              <s.FavouriteSelect>
                <Link to="/favourites">
                  <s.Heart />
                </Link>
              </s.FavouriteSelect>
            )}
          </s.FavWrapper>
          <Profile />
        </s.RightSide>
      </s.LogoAndOthers>
    </s.Header>
  );
};
