import React from 'react';


const MovieCard = ({ movie, onClick }) => {
  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"; // Fallback image

  return (
    <div className="movie-card" onClick={onClick}>
      <img src={posterUrl} alt={movie.Title} className="movie-poster" />
      <h3 className="movie-title">{movie.Title}</h3>
    </div>
  );
};

export default MovieCard;