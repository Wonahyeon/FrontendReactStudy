import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieItem from './MovieItem';

function MovieLIst() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888');
        console.log(response.data.movieListResult.movieList);
        setMovies(response.data.movieListResult.movieList);
      } catch (e) {
        console.error(e);
      }
    }
    fetchMovie();
  }, []);

  if (loading) {

  }

  return (
    <div>
      {movies && movies.map(movie =>
        <MovieItem key={movie.movieCd} movie={movie}/>
      )}
    </div>
  );
}

export default MovieLIst;