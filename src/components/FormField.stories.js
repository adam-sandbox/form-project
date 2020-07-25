import React, { useState, useCallback } from "react";

import formDefinition from "../config/form-definition-a";
import FormField from "./FormField";

export default {
  title: "FormField",
  component: FormField,
};

const fieldDefinition = formDefinition.first();
const useValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChangeValue = useCallback((_, value) => {
    setValue(value);
  }, []);

  return { value, handleChangeValue };
};

export const Default = () => {
  const { value, handleChangeValue } = useValue("");

  return (
    <FormField
      key={fieldDefinition.get("id")}
      definition={fieldDefinition}
      value={value}
      onChange={handleChangeValue}
    />
  );
};

export const Valid = () => {
  const { value, handleChangeValue } = useValue("Adam");

  return (
    <FormField
      key={fieldDefinition.get("id")}
      definition={fieldDefinition}
      value={value}
      onChange={handleChangeValue}
    />
  );
};

export const Invalid = () => {
  const { value, handleChangeValue } = useValue(1234);

  return (
    <FormField
      key={fieldDefinition.get("id")}
      definition={fieldDefinition}
      value={value}
      onChange={handleChangeValue}
    />
  );
};
