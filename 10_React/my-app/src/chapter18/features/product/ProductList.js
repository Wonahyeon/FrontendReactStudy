import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addProduct, deleteProduct, modifyProduct, selectProductList } from "./productSlice";

const ProductListBlock = styled.div`
  display: flex;
  li {
    width: 10.3rem;
  }
`;

function ProductList(props) {
  const dispatch = useDispatch();
   // const productList = useSelector(state => state.product.productList);
  const productList = useSelector(selectProductList);

  const [productName, setProductName] = useState('');

  const handleAddProduct = () => {
    if (productName) {
      dispatch(addProduct(productName));
      setProductName('');
    
    }
  }


  return (
    <div>
      <p>
        상품:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleAddProduct();
            }
          }}
        />
      <button
        type="button"
        onClick={handleAddProduct}
        >
        추가
      </button>
    </p>
      <ul>
        {productList &&
          productList.map((product) => {
            return (
            <ProductListBlock>
              <li key={product.id}>{product.name}
              </li>
              <button
                type='button'
                onClick={() => dispatch(modifyProduct(product))}
              >
                수정
              </button>
              <button
                type='button'
                onClick={() => dispatch(deleteProduct(product))}
              >
                삭제
              </button>
            </ProductListBlock> 
            );
          })}
      </ul>
    </div>
  );
}

export default ProductList;