import React from 'react';
import styled from "styled-components";

const MovieItemBlock = styled.div`
  display: flex;
`;

function MovieItem({movie}) {
  const {movieNm, prdtYear,typeNm, genreAlt} = movie;
  return (
    <MovieItemBlock>
      
    </MovieItemBlock>
  );
}

export default MovieItem;