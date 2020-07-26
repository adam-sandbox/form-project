import React from "react";
import Immutable from "immutable";

import { isValidString, isValidPositiveNumber } from "utilities/validators";
import Form from "./Form";

export default {
  title: "Form",
  component: Form,
};

const mockFormDefinition = Immutable.fromJS([
  {
    id: "fieldA",
    label: "Field A",
    type: "text",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidString,
  },
  {
    id: "fieldB",
    label: "Field B",
    type: "number",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidPositiveNumber,
  },
]);

const mockIncompleteData = Immutable.Map({
  fieldA: "test",
  fieldB: "",
});

const mockValidData = Immutable.Map({
  fieldA: "test",
  fieldB: 100,
});

const mockInvalidData = Immutable.Map({
  fieldA: "test",
  fieldB: "test",
});

export const Default = () => <Form definition={mockFormDefinition} />;

export const Incomplete = () => (
  <Form definition={mockFormDefinition} initialData={mockIncompleteData} />
);

export const Valid = () => (
  <Form definition={mockFormDefinition} initialData={mockValidData} />
);

export const Invalid = () => (
  <Form definition={mockFormDefinition} initialData={mockInvalidData} />
);
