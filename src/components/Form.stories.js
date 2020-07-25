import React from "react";
import Immutable from "immutable";

import formDefinition from "../config/form-definition-a";
import Form from "./Form";

export default {
  title: "Form",
  component: Form,
};

export const Default = () => <Form definition={formDefinition} />;

export const Valid = () => {
  return (
    <Form
      definition={formDefinition}
      initialData={Immutable.Map({
        name: "Jane",
        salary: "50000",
        age: 34,
      })}
    />
  );
};

export const Invalid = () => {
  return (
    <Form
      definition={formDefinition}
      initialData={Immutable.Map({
        name: "1234",
        salary: "",
        age: 30,
      })}
    />
  );
};

export const Loading = () => "Loading...";

export const Success = () => "Success!";
