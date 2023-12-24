import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
//Assets
import 'bootstrap/dist/css/bootstrap.min.css';

//Website
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login'
import Register from './components/register';
import RecipeSearch from './components/more_recipes';
import AddRecipe from './components/addrecipe';
import MyRecipes from './components/myrecipes';
import RecipeDetailBB from './components/recipeDetailsBB';
import RecipeDetailTasty from './components/recipeDetailsTasty';
import ProtectedRoutes from './protectedRoutes';
import Logout from './components/logout';
import profilePage from './components/profilePage';

function App() {
  return (
    <>
    <HashRouter>
      <Navbar />
      <Routes>
          <Route path='/chef/register' element={<Register />} />
          <Route path='/chef/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/home' element={<Home />} />
            <Route path='/chef/logout' element={<Logout />} />
            <Route path='/chef/more-recipes' element={<RecipeSearch />} />
            <Route path='/chef/add-recipe' element={<AddRecipe />} />
            <Route path='/chef/my-recipes' element={<MyRecipes />} />
            <Route path='/chef/my-profilepage' element={<profilePage />} />
            <Route path='/recipe/:recipe_slug/:recipe_id' element={<RecipeDetailBB />} />
            <Route path='/tastyrecipe/:recipe_slug/:recipe_id' element={<RecipeDetailTasty />} />
          </Route>
      </Routes>
      <Footer />
    </HashRouter>
    </>
  )
}
export default App
