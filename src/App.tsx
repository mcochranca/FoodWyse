import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import RecipeForm from './components/RecipeForm';
import RecipeDetails from './components/RecipeDetails';
import WorldMap from './components/WorldMap';
import UserProfile from './components/UserProfile';
import { Recipe } from './types';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Fetch recipes from the database
    // This is a placeholder and should be replaced with actual API calls
    const fetchRecipes = async () => {
      // Simulated API call
      const response = await fetch('/api/recipes');
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <WorldMap recipes={recipes} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home recipes={recipes} />} />
            <Route path="/add-recipe" element={<RecipeForm />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;