import s from "./RecipeSummary.styles";
import { AiFillHeart } from "react-icons/ai";
// import {HiShoppingCart} from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

import { TbChefHat } from "react-icons/tb";
import { BiTimeFive, BiBowlHot } from "react-icons/bi";
import { DietaryInfo } from "../DietaryInfo/DietaryInfo";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ShoppingList } from "../ShoppingList/ShoppingList";
import smarties from "../../images/smart-cookies.jpg";
import { Favourites } from "../../types";

interface Props {
  recipeId: string;
  recipeName: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  image: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  ingredients: string[];
  mutateFavourites(recipeId: string): void;
  favourites: Favourites;
  parsedIngredients: string[];
}

export const RecipeSummary: React.FC<Props> = ({
  recipeId,
  recipeName,
  prepTime,
  cookTime,
  servings,
  image,
  vegetarian,
  vegan,
  glutenFree,
  ingredients,
  mutateFavourites,
  favourites,
  parsedIngredients,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <s.RecipeSummary>
      <s.RecipeDesc>
        <s.ImageContainer>
          <s.RecipeImage
            src={image === "lol" ? smarties : image}
            alt={recipeName}
          />
        </s.ImageContainer>
        <s.RecipeSideContainer>
          <s.RecipeInfoContainer>
            <s.IconWrapper>
              <BiTimeFive />
            </s.IconWrapper>
            <s.TextWrapper>
              Preparation Time:
              <s.HeadingWrapper>{prepTime}</s.HeadingWrapper>
            </s.TextWrapper>
          </s.RecipeInfoContainer>
          <s.RecipeInfoContainer>
            <s.IconWrapper>
              <TbChefHat />
            </s.IconWrapper>
            <s.TextWrapper>
              Cooking Time: <s.HeadingWrapper>{cookTime}</s.HeadingWrapper>
            </s.TextWrapper>
          </s.RecipeInfoContainer>
          <s.RecipeInfoContainer>
            <s.IconWrapper>
              <BiBowlHot />
            </s.IconWrapper>
            <s.TextWrapper>
              Serving Size: <s.HeadingWrapper>{servings}</s.HeadingWrapper>
            </s.TextWrapper>
          </s.RecipeInfoContainer>
          {(vegetarian || vegan || glutenFree) && (
            <s.Dietry>
              <s.DietryTitle>Dietary:</s.DietryTitle>
              <DietaryInfo
                vegetarian={vegetarian}
                vegan={vegan}
                glutenFree={glutenFree}
              />
            </s.Dietry>
          )}
          <s.ButtonContainer>
            <s.Button onClick={() => mutateFavourites(recipeId)}>
              {favourites[recipeId] ? <AiFillHeart /> : <AiOutlineHeart />}
              <s.ButtonText>
                {favourites[recipeId]
                  ? "Remove from favourites"
                  : "Add to favourites"}
              </s.ButtonText>
            </s.Button>
            <s.Button onClick={() => setIsModalOpen(true)}>
              <HiOutlineShoppingCart />
              <s.ButtonText>Create shopping list</s.ButtonText>
            </s.Button>
          </s.ButtonContainer>
        </s.RecipeSideContainer>
      </s.RecipeDesc>
      {isModalOpen && (
        <Modal title="Shopping List" onClose={() => setIsModalOpen(false)}>
          <ShoppingList
            parsedIngredients={parsedIngredients}
            ingredients={ingredients}
          />
        </Modal>
      )}
    </s.RecipeSummary>
  );
};
