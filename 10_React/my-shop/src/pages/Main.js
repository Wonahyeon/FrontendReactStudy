import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

// 리액트(JS)에서 이미지 파일 import 하는 방법
import yonexImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, selectProductList } from '../features/product/productSlice';
import ProductListItem from '../components/ProductListItem';

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);
  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 전역 상태로 저장
  useEffect(() => {
    // 서버에 데이터 요청했다고 가정
    // ... api call ...
    dispatch(getAllProducts(data));

  }, []);

  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground/>
        {/* <img src={yonexImg} /> */}
      </section>

      {/* 상품 목록 레이웃 섹션 */}
      <section>
        <Container>
          <Row>
            {/*
              1) 반복적인 상품 아이템을 src/components/ProductListItem 컴포넌트로 만들기
              2) productList 배열을 반복하여 ProductListItem을 렌더링하기
              3) 상품 정보를 props로 넘겨서 데이터 바인딩하기
            */}
            {productList.map( product =>
              <ProductListItem product={product} key={product.id}/>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;