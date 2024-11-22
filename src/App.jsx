import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import RecipeList from './Components/RecipeList';
import RecipeForm from './Components/RecipeForm';


const App = () => {
  return (
    <BrowserRouter>
        <Router>
            <Route path='/navbar' element={<Navbar/>}></Route>
            <Route path='/recipeList' element={<RecipeList/>}></Route>
            <Route path='/recipeform' element={<RecipeForm/>}></Route>
        </Router>
    </BrowserRouter>
  );
};

export default App;
