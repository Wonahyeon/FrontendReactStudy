import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 방법1: 스타일드 컴포넌트로 스타일 확장
const StyledCol = styled(Col)`
  cursor: pointer;
`;

// 방법2: 공통 스타일로 작성

function ProductListItem({product:{id, imagePath, title, price}}) {

  // 이동 경로 설정하기
  const navigate = useNavigate();

  return (
    // 부트스트랩을 이용한 반응형 작업
    <StyledCol md={4} className="cursor-pointer">
      <img src={imagePath} width="80%"
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
      />
      <h4>{title}</h4>
      <p>{price}원</p>
    </StyledCol>
  );
}

export default ProductListItem;