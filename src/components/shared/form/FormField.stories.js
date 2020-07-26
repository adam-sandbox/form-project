import React from "react";
import Immutable from "immutable";

import { isValidPositiveNumber } from "utilities/validators";
import FormField from "./FormField";

export default {
  title: "FormField",
  component: FormField,
};

const mockFieldDefinition = Immutable.fromJS({
  id: "fieldA",
  label: "Field",
  type: "number",
  config: { autoComplete: "off", spellCheck: false },
  validator: isValidPositiveNumber,
});

export const Default = () => {
  return (
    <FormField
      key={mockFieldDefinition.get("id")}
      definition={mockFieldDefinition}
      value={""}
      onChange={() => {}}
    />
  );
};

export const Valid = () => {
  return (
    <FormField
      key={mockFieldDefinition.get("id")}
      definition={mockFieldDefinition}
      value={"1234"}
      onChange={() => {}}
    />
  );
};

export const Invalid = () => {
  return (
    <FormField
      key={mockFieldDefinition.get("id")}
      definition={mockFieldDefinition}
      value={"Test"}
      onChange={() => {}}
    />
  );
};
