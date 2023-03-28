import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home/Home";
import "./fonts/Gloock-Regular.ttf";
import { Header } from "./components/Header/Header";
import { RecipePage } from "./pages/RecipePage/RecipePage";
import { Favourites } from "./pages/Favourites/Favourites";
import { useState } from "react";
import { Recipes } from "./types";

function App() {
  const [wordInput, setWordInput] = useState<String>("");
  const [recipesResults, setRecipesResults] = useState<Recipes>([]);
  const [recipesLoading, setRecipesLoading] = useState(false);
  const [recipesError, setRecipesError] = useState(false);
  const [totalPages, setTotalPages] = useState<string | null>("0");
  const [firstTimeLoading, setFirstTimeLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [fillerRecipesIds, setFillerRecipesIds] = useState<string[]>([]);

  const retrieveTitleRecipes = (pageNumber: number) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setRecipesLoading(true);
    fetch(
      `https://lastsupper.3ajlo.icekube.ics.cloud/api/v1/recipes/titleSearch?wordInput=${wordInput}&page=${pageNumber}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        setTotalPages(response.headers.get("Total-Pages"));
        return response.json();
      })
      .then((recipes) => {
        setRecipesResults(recipes);
      })
      .catch((error) => {
        console.error(error);
        setRecipesError(true);
      })
      .finally(() => {
        setRecipesLoading(false);
      });
  };

  return (
    <>
      <Header
        setWordInput={setWordInput}
        setFirstTimeLoading={setFirstTimeLoading}
        setCurrentPage={setCurrentPage}
        retrieveRecipes={retrieveTitleRecipes}
        setIsButtonClicked={setIsButtonClicked}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              recipesResults={recipesResults}
              setRecipesResults={setRecipesResults}
              totalPages={totalPages}
              recipesError={recipesError}
              recipesLoading={recipesLoading}
              firstTimeLoading={firstTimeLoading}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              setRecipesLoading={setRecipesLoading}
              setTotalPages={setTotalPages}
              setRecipesError={setRecipesError}
              setFirstTimeLoading={setFirstTimeLoading}
              retrieveTitleRecipes={retrieveTitleRecipes}
              setIsButtonClicked={setIsButtonClicked}
              isButtonClicked={isButtonClicked}
              fillerRecipesIds={fillerRecipesIds}
              setFillerRecipesIds={setFillerRecipesIds}
            />
          }
        ></Route>
        <Route path="/recipe/:recipeIds" element={<RecipePage />}></Route>
        <Route
          path="/favourites"
          element={<Favourites fillerRecipesIds={fillerRecipesIds} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
