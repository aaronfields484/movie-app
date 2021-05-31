import React, { useState } from "react";
import MovieCard from './MovieCard.js';
import fetchMovies from '../utils/api.js';
import '../style/App.css';

function App() {

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [poster, setPoster] = useState("");

  fetchMovies()
  .then(movie =>{ 
    console.log(movie);
    setTitle(movie.Title);
    setType(movie.Type);
    setPoster(movie.Poster);
  })
  .catch(err => console.error(err));

  return (
    <div className="movie-cards">
    <MovieCard title={title} type={type} posterUrl={poster} />
    <MovieCard title={title} type={type} posterUrl={poster} />
    </div>
  );
}

export default App;
