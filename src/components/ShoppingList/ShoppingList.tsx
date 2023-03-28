import React, { useEffect, useState } from "react";
import s from "./ShoppingList.styles";
// import { HiOutlineShoppingCart } from "react-icons/hi";

type Props = {
  ingredients: string[];
  parsedIngredients: string[];
};

export const ShoppingList: React.FC<Props> = ({
  ingredients,
  parsedIngredients,
}) => {
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([""]);

  const addSingularsBack = (
    chosenIngredients: string[],
    numberOfIngredients: number
  ) => {
    for (let i = 0; i < numberOfIngredients; i++) {
      if (chosenIngredients[i] === "eggs") {
        chosenIngredients.push("egg white");
        chosenIngredients.push("egg whites");
        chosenIngredients.push("egg yolk");
        chosenIngredients.push("egg yolks");
      }
      chosenIngredients.push(chosenIngredients[i].slice(0, -1));
      chosenIngredients.push(chosenIngredients[i].slice(0, -2));
      chosenIngredients.push(chosenIngredients[i].slice(0, -3) + "y");
    }
  };

  useEffect(() => {
    try {
      addSingularsBack(parsedIngredients, parsedIngredients.length);
      setCheckedIngredients(parsedIngredients);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleIngredientChange = (ingredient: string) => {
    if (checkedIngredients.includes(ingredient)) {
      setCheckedIngredients((prev) =>
        prev.filter((item) => item !== ingredient)
      );
    } else {
      setCheckedIngredients((prev) => [...prev, ingredient]);
    }
  };

  return (
    <s.ShoppingListContainer>
      <s.IngredientList>
        {ingredients.map((ingredient) => (
          <s.ListItem
            key={ingredient}
            isChecked={checkedIngredients.includes(ingredient)}
          >
            <label>
              <s.CheckboxContainer>
                <s.Checkbox
                  type="checkbox"
                  checked={checkedIngredients.includes(ingredient)}
                  onChange={() => handleIngredientChange(ingredient)}
                />
                {ingredient}
              </s.CheckboxContainer>
            </label>
          </s.ListItem>
        ))}
      </s.IngredientList>
      {/* <s.Button>
        <s.ButtonText>Save shopping list</s.ButtonText>
        <HiOutlineShoppingCart />
      </s.Button> */}
    </s.ShoppingListContainer>
  );
};
