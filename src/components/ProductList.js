import React from "react";
import styled from "styled-components";

const Products = styled.ul`
  display: block;
  padding: 1rem 0 0;
  list-style: none;
  border-top: 1px solid lightgray;
`;

const Product = styled.li`
  margin: 0.5rem 0;
`;

const ProductList = ({ products }) => (
  <>
    <h2>Products</h2>
    {products.length > 0 ? (
      <Products>
        {products.map(product => (
          <Product key={product.id}>{product.name}</Product>
        ))}
      </Products>
    ) : (
      <p>No products found.</p>
    )}
  </>
);

export default ProductList;
