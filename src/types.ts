export interface Recipe {
  id: string;
  name: string;
  ingredientsAndQuantities: string;
  ingredients: Ingredient[];
  description: string;
  method: string;
  prepTime: string;
  cookTime: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  servings: string;
  image: string;
}
export interface Ingredient {
  id: string;
  name: string;
}

export interface Favourites {
  [recipeId: string]: boolean;
}

export type Recipes = Recipe[];
