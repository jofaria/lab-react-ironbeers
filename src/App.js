import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RandomBeersPage from './pages/RandomBeersPage';
import AllBeersPage from './pages/AllBeersPage';
import AddBeerPage from './pages/AddBeerPage';
import Header from './components/Header';
import BeerDetailsPage from './pages/BeerDetailsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Beers Project</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeersPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
