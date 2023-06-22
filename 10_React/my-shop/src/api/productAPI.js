import axios from "axios";
import { getMoreProducts } from "../features/product/productSlice";
// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러 곳에서 재사용할 수 있도록 함수로 만듦


// 상품 목록을 조회
export const getProducts = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/Wonahyeon/db-shop/products');

    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  } catch (error) {
    console.error(error);
    throw error;
  }
};


// 특정 상품 조회
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/Wonahyeon/db-shop/products/${id}`);

    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 만약 서버로 데이터를 보내야 한다면?
// json-server 이용 시 테스트 가능
// 상품 추가
export const addProduct = async (product) => {
  try {
    const response = await axios.post(`https://localhost:4000/products`, { product });

    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 상품 주문
export const orderProduct = async (productId, orderCount) => {
  try {
    const response = await axios.post(`https://localhost:4000/product-order`, { productId, orderCount });

    if (response.status === 200) { // 요청에 대한 응답의 상태가 200 OK 일때만 결과를 리턴
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }

  } catch (error) {
    console.error(error);
    throw error;
  }
};
