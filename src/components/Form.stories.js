import React from "react";
import Immutable from "immutable";

import formDefinition from "../config/form-definition-a";
import Form from "./Form";

export default {
  title: "Form",
  component: Form,
};

const validData = Immutable.Map({
  name: "Bob",
  salary: "50000",
  age: 34,
});

const invalidData = Immutable.Map({
  name: "1234",
  salary: "",
  age: -30,
});

export const Default = () => <Form definition={formDefinition} />;

export const Valid = () => {
  return <Form definition={formDefinition} initialData={validData} />;
};

export const Invalid = () => {
  return <Form definition={formDefinition} initialData={invalidData} />;
};
