import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../actions/recipeActions';

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({ name: '', ingredients: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe.name && recipe.ingredients) {
      dispatch(addRecipe(recipe));
      setRecipe({ name: '', ingredients: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recipe.name}
        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Ingredients"
        value={recipe.ingredients}
        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
