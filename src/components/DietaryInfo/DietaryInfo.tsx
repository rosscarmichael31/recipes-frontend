import s from "./DietaryInfo.styles";
import { GiWheat } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { BiLeaf } from "react-icons/bi";

interface Props {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
}

export const DietaryInfo: React.FC<Props> = ({
  vegetarian,
  vegan,
  glutenFree,
}) => {
  return (
    <s.TextWrapper>
      <s.IndividualDietaryContainer>
        {glutenFree && (
          <s.HeadingWrapper>
            <s.Icon>
              <GiWheat />
            </s.Icon>
            Gluten free
          </s.HeadingWrapper>
        )}
      </s.IndividualDietaryContainer>
      <s.IndividualDietaryContainer>
        {!vegan && vegetarian && (
          <s.HeadingWrapper>
            <s.Icon>
              <BiLeaf />
            </s.Icon>
            Vegetarian
          </s.HeadingWrapper>
        )}
      </s.IndividualDietaryContainer>
      <s.IndividualDietaryContainer>
        {vegan && (
          <s.HeadingWrapper>
            <s.Icon>
              <FaLeaf />
            </s.Icon>
            Vegan
          </s.HeadingWrapper>
        )}
      </s.IndividualDietaryContainer>
    </s.TextWrapper>
  );
};
