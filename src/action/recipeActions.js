import axios from 'axios';

export const fetchRecipes = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:5000/recipes');
    dispatch({
      type: 'FETCH_RECIPES',
      payload: response.data,
    });
  };
};

export const addRecipe = (recipe) => {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:5000/recipes', recipe);
    dispatch({
      type: 'ADD_RECIPE',
      payload: response.data,
    });
  };
};

export const updateRecipe = (id, updatedRecipe) => {
  return async (dispatch) => {
    const response = await axios.put(`http://localhost:5000/recipes/${id}`, updatedRecipe);
    dispatch({
      type: 'UPDATE_RECIPE',
      payload: response.data,
    });
  };
};

export const deleteRecipe = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:5000/recipes/${id}`);
    dispatch({
      type: 'DELETE_RECIPE',
      payload: id,
    });
  };
};
