//import React, { useState, useEffect } from 'react';
//import Axios from "axios"
import './App.css';
import HomePage from './pages/home/HomePage';
import MoviePage from './pages/moviePage/MoviePage';
import AddMoviePage from './pages/addMovie/AddMoviePage';
import CatalogPage from './pages/catalog/CatalogPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>;

        <Route path='/moviePage' element={<MoviePage />}></Route>;
        
        <Route path='/catalog' element={<CatalogPage />}></Route>;

        <Route path='/addmovie' element={<AddMoviePage />}></Route>;

      </Routes>
    </BrowserRouter>
  );
}


export default App;