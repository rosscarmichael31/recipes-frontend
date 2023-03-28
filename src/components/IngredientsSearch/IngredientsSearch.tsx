import s from "./IngredientsSearch.styles";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Ingredient } from "../../types";
import { useAuth0 } from "@auth0/auth0-react";
import { Modal } from "../Modal/Modal";
import { ClearForm } from "../ClearForm/ClearForm";

interface Props {
  setFirstTimeLoading: (firstTimeLoading: boolean) => void;
  setCurrentPage: (page: number) => void;
  retrieveRecipes: (pn: number) => void;
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
  ingredients: string[];
  setIsButtonClicked: (button: boolean) => void;
  setFillerRecipesIds: (filler: string[]) => void;
}

export const IngredientsSearch: React.FC<Props> = ({
  setFirstTimeLoading,
  setCurrentPage,
  retrieveRecipes,
  setIngredients,
  ingredients,
  setIsButtonClicked,
  setFillerRecipesIds,
}) => {
  const [ingredient, setIngredient] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ingredientNames, setIngredientNames] = useState<string[]>([]);
  const [ingredientObjects, setIngredientObjects] = useState<Ingredient[]>([]);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const ingsRef = useRef<HTMLDivElement>(null);

  const [pantryError, setPantryError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (ingsRef.current) {
      ingsRef.current.scrollIntoView();
    }
  }, [ingredients]);

  const deleteFromFridgeList = async (input: string) => {
    let idToken: string = "";
    try {
      idToken = await getAccessTokenSilently();
    } catch (err) {
      console.warn("Please login");
    }

    if (isAuthenticated) {
      ingredientObjects.forEach((ingredient) => {
        if (ingredient.name === input) {
          fetch(
            `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/fridge`,
            {
              method: "DELETE",
              body: JSON.stringify({ id: `${ingredient.id}` }),
              headers: {
                authorization: `Bearer ${idToken}`,
                "Content-type": "application/json",
              },
            }
          );
        }
      });
    }
  };

  useEffect(() => {
    try {
      getStorageIngredients();
    } catch (error) {
      console.error(error);
    }
    setLoading(true);
    fetch(`https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/ingredients`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((selections) => {
        setIngredientObjects(selections);
        setIngredientNames(
          selections.map(
            (selection: { id: string; name: string }) => selection.name
          )
        );
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });

    fetch("https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/recipes/random/6")
      .then((res) => res.json())
      .then((ids) => {
        setFillerRecipesIds(ids);
      })
      .catch((error) => {
        console.error(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeSingularsFromIngredients = (ingredients: string[]) => {
    for (let i = 0; i < ingredients.length; i++) {
      for (let j = 0; j < ingredients.length; j++) {
        if (
          ingredients[i] + "s" === ingredients[j] ||
          ingredients[i].slice(0, -1) + "ies" === ingredients[j] ||
          ingredients[i] + "es" === ingredients[j]
        ) {
          ingredients.splice(i, 1);
          i--;
          j--;
        }
      }
    }
  };
  removeSingularsFromIngredients(ingredientNames);
  ingredientNames.push("cheese");

  const handleDelete = (ingredient: string) => {
    setIngredients((ingredients) =>
      ingredients.filter((i) => ingredient !== i)
    );
    deleteFromFridgeList(ingredient);
    setIngredient("");
  };

  useEffect(() => {
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients((ingredients) => [...ingredients, ingredient]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredient]);

  const getStorageIngredients = async () => {
    let idToken: string = "";
    try {
      idToken = await getAccessTokenSilently();
    } catch (err) {
      console.warn("Please login");
    }
    if (isAuthenticated) {
      fetch(`https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/fridge`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${idToken}`,
          "Content-type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((ingredients) => {
          setIngredients(
            ingredients.map(
              (ingredient: { id: string; name: string }) => ingredient.name
            )
          );
        })
        .catch((error) => {
          console.error(error);
          setPantryError(true);
        });
    }
  };

  const handleSearch = () => {
    setCurrentPage(0);
    setFirstTimeLoading(false);
    retrieveRecipes(0);
    setIsButtonClicked(false);
  };

  return (
    <s.IngredientsSearch>
      <s.Heading>Ingredients Search</s.Heading>
      <s.AutocompleteWrapper>
        <Autocomplete
          suggestions={ingredientNames}
          setIngredient={setIngredient}
          ingredientsWithIDs={ingredientObjects}
          loading={loading}
          error={error}
        />
      </s.AutocompleteWrapper>
      <s.HeadingWrapper>
        <s.ListHeading>Your Pantry</s.ListHeading>
        <s.DeleteAll onClick={() => setIsModalOpen(true)}>
          <RiDeleteBin6Line />
        </s.DeleteAll>
      </s.HeadingWrapper>
      <s.ListHeadingBodyWrapper>
        {!pantryError && (
          <s.IngredientsListWrapper>
            <s.IngredientsList>
              {ingredients.map((ingredient) => (
                <s.IngredientWrapper key={ingredient}>
                  <s.Ingredient key={ingredient}>{ingredient}</s.Ingredient>
                  <s.DeleteIngredient onClick={() => handleDelete(ingredient)}>
                    <MdOutlineCancel />
                  </s.DeleteIngredient>
                </s.IngredientWrapper>
              ))}
              <div ref={ingsRef} />
            </s.IngredientsList>
          </s.IngredientsListWrapper>
        )}
        {pantryError && <s.Error>An error occurred</s.Error>}
      </s.ListHeadingBodyWrapper>
      <s.SearchWrapper>
        <s.Search onClick={handleSearch}>
          <s.ButtonText> Search for recipes from your pantry</s.ButtonText>{" "}
          <s.Arrow />
        </s.Search>
      </s.SearchWrapper>
      {isModalOpen && (
        <Modal title="Clear pantry?" onClose={() => setIsModalOpen(false)}>
          <ClearForm
            onClose={() => setIsModalOpen(false)}
            setIngredients={setIngredients}
          />
        </Modal>
      )}
    </s.IngredientsSearch>
  );
};
