import React, { useEffect, useState } from 'react';
import axios from "axios";
import MovieItem from './MovieItem';
import styled from 'styled-components';

const MovieListBlock = styled.div`
  background: #aabb93;
  color: #ffffff;
  width: 40rem;
  margin: 0 auto;
  .title {
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem;
    border-bottom: .2rem solid ;
    span {
      margin-left: .5rem;
      font-size: 1rem;
    }
  }
  .content {
    box-sizing: border-box;
    padding: 1rem;
    margin: 1rem;
    width: 35rem;
    margin: 0 auto;
  }
`;

function MovieLIst() {
  const [movies, setMovies] = useState(null);
 
  // 오늘 날짜 박스오피스 확인용
  const today_year = String(new Date().getFullYear());
  const today_month = String(new Date().getMonth() + 1);
  const today_date = String(new Date().getDate());
  const today = today_year + (today_month < 10 ? '0' + today_month: today_month) + (today_date < 10 ? '0'+ today_date : today_date);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${today - 1}`);
        console.log(response.data.boxOfficeResult.dailyBoxOfficeList);
        setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);
      } catch (e) {
        console.error(e);
      }
    }
    fetchMovie();
  }, []);

  return (
    <MovieListBlock>
      <div className='title'>무비차트<span>{today}</span></div>
      <div className="content">
      {movies && movies.map(movie =>
        <MovieItem key={movie.movieCd} movie={movie}/>
      )}
      </div>
    </MovieListBlock>
  );
}

export default MovieLIst;