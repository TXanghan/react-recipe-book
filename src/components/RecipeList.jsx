import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';
import RecipeDetails from './RecipeDetails';

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeDetails key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
