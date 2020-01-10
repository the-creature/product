import React, { useState } from "react";
import styled from "styled-components";
import productsData from "./data/products.json";
import ingredientsData from "./data/ingredients.json";
import IngredientFilter from "./components/IngredientFilter";
import ProductList from "./components/ProductList";

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 1rem 0 0 0;
`;

const App = () => {
  const ingredient = ingredientsData.ingredients.find(
    ingredient => ingredient.name === "Organic Banana"
  );

  const [selectedIngredientId, setSelectedIngredientId] = useState(
    ingredient.id
  );
  const handleIngredientChange = ingredientId =>
    setSelectedIngredientId(ingredientId);

  const filteredProducts = productsData.products.filter(product =>
    product.ingredient_ids.includes(selectedIngredientId)
  );
  return (
    <AppWrapper>
      <IngredientFilter
        value={selectedIngredientId}
        options={ingredientsData.ingredients}
        onChange={handleIngredientChange}
      />
      <ProductList products={filteredProducts} />
    </AppWrapper>
  );
};

export default App;
