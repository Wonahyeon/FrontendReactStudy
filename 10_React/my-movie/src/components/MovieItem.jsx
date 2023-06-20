import React from 'react';
import styled from "styled-components";

const MovieItemBlock = styled.div`
`;

function MovieItem({movie}) {
  const {movieNm, openDt} = movie;
  return (
    <MovieItemBlock>
      <h2>{movieNm}</h2>
      <p>{openDt}</p>
    </MovieItemBlock>
  );
}

export default MovieItem;