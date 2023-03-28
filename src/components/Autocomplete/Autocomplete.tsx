import React, { useEffect, useRef, useState } from "react";
import s from "./Autocomplete.styles";
import { IoMdAdd } from "react-icons/io";
import { Ingredient } from "../../types";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  suggestions: string[];
  setIngredient: (ingredient: string) => void;
  error: boolean;
  loading: boolean;
  ingredientsWithIDs: Ingredient[];
}

export const Autocomplete: React.FC<Props> = ({
  suggestions,
  setIngredient,
  loading,
  error,
  ingredientsWithIDs,
}) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([""]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const sendToFridgeList = async (input: string) => {
    let idToken = "";
    try {
      idToken = await getAccessTokenSilently();
    } catch (err) {
      console.warn("Please login");
    }
    if (isAuthenticated) {
      ingredientsWithIDs.forEach((ingredient) => {
        if (ingredient.name === input) {
          fetch(
            `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/user/fridge`,
            {
              method: "POST",
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const clearInvalidInput = () => {
    if (input && !suggestions.includes(input)) {
      setInput("");
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      clearInvalidInput();
      setIsShow(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value.toLowerCase();
    const newFilteredSuggestions = suggestions.filter(
      (suggestion: string) =>
        suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );

    newFilteredSuggestions.sort((a, b) => {
      const aIndex = a.toLowerCase().indexOf(input);
      const bIndex = b.toLowerCase().indexOf(input);
      if (aIndex === bIndex) {
        return a.localeCompare(b);
      } else if (aIndex === 0) {
        return -1;
      } else if (bIndex === 0) {
        return 1;
      } else {
        return aIndex - bIndex;
      }
    });

    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value);
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
    setIngredient(e.currentTarget.innerText);
    sendToFridgeList(e.currentTarget.innerText);
    setInput("");
  };
  const onMouseOver = (suggestion: string) => {
    setActive(filtered.indexOf(suggestion));
  };
  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      if (filtered.length === 0) {
        setInput("");
        return;
      }
      // enter key
      if (input) {
        setInput(filtered[active]);
        setIngredient(filtered[active]);
        sendToFridgeList(filtered[active]);
        setInput("");
      }
      setFiltered([filtered[active]]);
      setActive(0);
      setIsShow(false);
    } else if (e.keyCode === 38) {
      // up arrow
      if (optionsRef.current && optionsRef.current.children[active]) {
        (optionsRef.current.children[active] as HTMLElement).scrollIntoView({
          block: "center",
        });
      }
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // down arrow
      if (optionsRef.current && optionsRef.current.children[active]) {
        (optionsRef.current.children[active] as HTMLElement).scrollIntoView({
          block: "center",
        });
      }
      return active + 1 === filtered.length ? null : setActive(active + 1);
    }
  };

  const handleButtonPress = (e: React.MouseEvent<HTMLElement>) => {
    if (suggestions.includes(input)) {
      setIngredient(input);
      sendToFridgeList(input);
      setInput("");
    }
  };

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (loading) {
        return (
          <s.NoAutocomplete>
            <s.NotFound>Loading...</s.NotFound>
          </s.NoAutocomplete>
        );
      }
      if (error) {
        return (
          <s.NoAutocomplete>
            <s.NotFound>Error</s.NotFound>
          </s.NoAutocomplete>
        );
      }
      if (filtered.length) {
        return (
          <s.AutocompleteOptions ref={optionsRef}>
            {filtered.map((suggestion, index) => {
              let selected: boolean = false;
              if (index === active) {
                selected = true;
              }
              return (
                <s.Option
                  selected={selected}
                  key={suggestion}
                  onClick={onClick}
                  onMouseOver={() => onMouseOver(suggestion)}
                >
                  {suggestion}
                </s.Option>
              );
            })}
          </s.AutocompleteOptions>
        );
      } else {
        return (
          <s.NoAutocomplete>
            <s.NotFound>Not found</s.NotFound>
          </s.NoAutocomplete>
        );
      }
    }
    return <></>;
  };
  return (
    <div ref={wrapperRef}>
      <s.AutocompleteWrapper>
        <s.Autocomplete
          type="text"
          placeholder="Type an ingredient here"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        <s.Select onClick={handleButtonPress}>
          <IoMdAdd />
        </s.Select>
      </s.AutocompleteWrapper>
      {renderAutocomplete()}
    </div>
  );
};
