import React from "react";
import { render } from "@testing-library/react";
import ingredientsData from "../data/ingredients.json";
import IngredientFilter from "./IngredientFilter";

test("renders Select Ingredient", () => {
  const props = {
    value: 1,
    options: ingredientsData.ingredients,
    onChange: jest.fn()
  };

  const { getByText } = render(<IngredientFilter {...props} />);
  const labelElement = getByText(/select ingredient/i);
  expect(labelElement).toBeInTheDocument();
});
