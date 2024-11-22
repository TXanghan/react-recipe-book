const initialState = {
    recipes: [],
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RECIPES':
        return { ...state, recipes: action.payload };
      case 'ADD_RECIPE':
        return { ...state, recipes: [...state.recipes, action.payload] };
      case 'UPDATE_RECIPE':
        return {
          ...state,
          recipes: state.recipes.map((recipe) =>
            recipe.id === action.payload.id ? action.payload : recipe
          ),
        };
      case 'DELETE_RECIPE':
        return {
          ...state,
          recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  