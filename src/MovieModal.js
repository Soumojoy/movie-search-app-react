import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import axios from 'axios';

const MovieModal = ({ movie, onClose }) => {
  const [details, setDetails] = useState(null);
  const API_KEY = 'abb51b4f'; // Replace with your OMDB API key

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`);
      setDetails(response.data);
      console.log(response.data)
    };
    fetchMovieDetails();
  }, [movie]);

  if (!details) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{details.Title}</h2>
        <p><strong>Plot:</strong> {details.Plot}</p>
        <p><strong>Genre:</strong> {details.Genre}</p>
        <p><strong>Ratings:</strong> {details.Ratings.map(r => `${r.Source}: ${r.Value}`).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieModal;