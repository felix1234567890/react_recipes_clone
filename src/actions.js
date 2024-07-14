'use server'

import { fetchRecipes } from "./components/RecipeDetails";

export const handleSubmit = async (formData) => {
   const searchTerm = formData.get('search')
   return fetchRecipes(searchTerm)
  };