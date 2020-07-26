import React from "react";

import formDefinition from "../config/form-definition-a";
import FormField from "./FormField";

export default {
  title: "FormField",
  component: FormField,
};

const fieldDefinition = formDefinition.first();

export const Default = () => {
  return (
    <FormField
      key={fieldDefinition.get("id")}
      definition={fieldDefinition}
      value={""}
      onChange={() => {}}
    />
  );
};

export const Valid = () => {
  return (
    <FormField
      key={fieldDefinition.get("id")}
      definition={fieldDefinition}
      value={"Bob"}
      onChange={() => {}}
    />
  );
};

export const Invalid = () => {
  return (
    <FormField
      key={fieldDefinition.get("id")}
      definition={fieldDefinition}
      value={1234}
      onChange={() => {}}
    />
  );
};
