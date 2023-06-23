import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { PulseLoader } from "react-spinners";

// 리액트(JS)에서 이미지 파일 import 하는 방법
import yonexImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { getAllProducts, getMoreProducts, getMoreProductsAsync, selectProductList, selectStatus } from '../features/product/productSlice';
import ProductListItem from '../components/ProductListItem';
import { getProducts } from '../api/productAPI';
import LatestView from "../components/LatestView";
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
  const status = useSelector(selectStatus); // API 요청 상태(로딩 상태)


  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 전역 상태로 저장
  useEffect(() => {
    // 서버에 데이터 요청했다고 가정
    // ... api call ...
    dispatch(getAllProducts(data));

  }, []);

  const handleGetMoreProducts = async () => {
    const result = await getProducts();
    if (!result) return; // 결과값이 없으면 함수 종료

    dispatch(getMoreProducts(result));
  };

  const handleGetMoreProductsAsync = () => {
    dispatch(getMoreProductsAsync());
  };

  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground/>
        {/* <img src={yonexImg} /> */}
      </section>

      {/* 상품 목록 레이아웃 섹션 */}
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

            {/* 로딩 */}
            {status === 'loading' &&
              <div>
                <PulseLoader
                  color='#36d7b7'
                  margin={50}
                  size={30}
                />
              </div>
            }
          </Row>
        </Container>

        {/*  상품 더보기 버튼 */}
        <Button variant='secondary' className='mb-4'
          onClick={() => {
            axios.get('https://my-json-server.typicode.com/Wonahyeon/db-shop/products')
              .then((response) => {
                // console.log(response.data);
                dispatch(getMoreProducts(response.data));
              })
              .catch((error) =>
                console.error(error)
              );
          }}
        >
          더보기
        </Button>

        {/* 위 HTTP 요청 코드를 함수로 만들어서 api폴더로 추출하고, async/await로 바꾸기 */}
        <Button variant='secondary' className='mb-4' onClick={handleGetMoreProducts}>
          더보기
        </Button>

        {/* thunk를 이용한 비동기 작업 처리하기 */}
        <Button variant='secondary' className='mb-4' onClick={handleGetMoreProductsAsync}>
          더보기 {status}
        </Button>
      </section>

      {/* 최근 본 상품 */}
      <LatestView/>
    </>
  );
}

export default Main;