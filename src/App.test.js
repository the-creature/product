import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders filter", () => {
  const { getByText } = render(<App />);
  const filterElement = getByText(/select ingredient/i);
  expect(filterElement).toBeInTheDocument();
});

test("renders products", () => {
  const { getByText } = render(<App />);
  const productElement = getByText(/Products/i);
  expect(productElement).toBeInTheDocument();
});
