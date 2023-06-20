import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieItem from './MovieItem';
import styled from 'styled-components';

const MoviesBlock = styled.div`
`;

function MovieLIst() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220101');
        console.log(response.data.boxOfficeResult.dailyBoxOfficeList);
        setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);
      } catch (e) {
        console.error(e);
      }
    }
    fetchMovie();
  }, []);

  if (loading) {

  }

  return (
    <MoviesBlock>
      {movies && movies.map(movie =>
        <MovieItem key={movie.movieCd} movie={movie}/>
      )}
    </MoviesBlock>
  );
}

export default MovieLIst;