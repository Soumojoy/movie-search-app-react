import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieModal from './MovieModal';
import './App.css';
import MovieCard from './MovieCard';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  const API_KEY = 'abb51b4f'; // Replace with your OMDB API key

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?s=batman&apikey=${API_KEY}`);
    setMovies(response.data.Search);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
    setMovies(response.data.Search);
    console.log(movies)
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="movie-list">
        {movies && movies.map((movie) => (
          // <div key={movie.imdbID} className="movie-item" onClick={() =>}>
          //   <h3>{movie.Title} ({movie.Year})</h3>
          // </div>
          <MovieCard key={movie.imdbID} movie={movie} onClick={() =>  handleMovieClick(movie)} />

        ))}
      </div>
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
};

export default App;