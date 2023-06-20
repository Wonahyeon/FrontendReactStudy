import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, selectProductList } from "./productSlice";


function ProductList(props) {
  const product = useSelector(selectProductList);
  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');


  return (
    <div>
      <label>
        상품:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => dispatch(addProduct(productName))}
      >
        추가
      </button>
      <button
        type="button"
        onClick={() => dispatch(deleteProduct(productName))}
      >
        삭제
      </button>
      <ul>
        {product.map((product) => <li key={product.id}>{product.name}</li>)}
      </ul>
    </div>
  );
}

export default ProductList;