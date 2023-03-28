import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import s from "./TitleSearch.styles";

interface Props {
  setWordInput: (word: string) => void;
  setFirstTimeLoading: (firstTimeLoading: boolean) => void;
  setCurrentPage: (page: number) => void;
  retrieveRecipes: (pn: number) => void;
  setIsButtonClicked: (button: boolean) => void;
}

export const TitleSearch: React.FC<Props> = ({
  setWordInput,
  setFirstTimeLoading,
  setCurrentPage,
  retrieveRecipes,
  setIsButtonClicked,
}) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setWordInput(e.target.value);
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    setCurrentPage(0);
    setFirstTimeLoading(false);
    retrieveRecipes(0);
    setIsButtonClicked(true);
    navigate(`/`);
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <s.TitleSearchContainer>
      <s.LabelWrapper>
        <s.TitleInput
          type="text"
          placeholder="Search by keyword e.g. pizza"
          onChange={handleInput}
          onKeyDown={onKeyDown}
        />
      </s.LabelWrapper>
      <s.Search onClick={handleSearch}>
        <s.Arrow />
      </s.Search>{" "}
    </s.TitleSearchContainer>
  );
};
