import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteRecipe, updateRecipe } from '../actions/recipeActions';

const RecipeDetails = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteRecipe(recipe.id));
  };

  const handleUpdate = () => {
    const updatedRecipe = { ...recipe, name: 'Updated ' + recipe.name };
    dispatch(updateRecipe(recipe.id, updatedRecipe));
  };

  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>{recipe.ingredients}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default RecipeDetails;

