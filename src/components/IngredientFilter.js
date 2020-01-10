import React from "react";
import styled from "styled-components";

const Field = styled.div`
  display: flex;
`;

const Label = styled.label`
  margin-right: 1rem;
`;

const Select = styled.select``;

const IngredientFilter = ({ value, options, onChange }) => {
  const handleChange = ({ target: { value } }) => {
    onChange(parseInt(value, 10));
  };

  return (
    <Field>
      <Label>Select Ingredient</Label>
      <Select value={value} onChange={handleChange}>
        {options.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </Select>
    </Field>
  );
};

export default IngredientFilter;
