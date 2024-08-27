import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api/movieService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchPopularMovies();
      setMovies(fetchedMovies);
    };
    loadMovies();
  }, []);

  return (
    <div className="movie-list">
      <h1>Popular Movies</h1>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
