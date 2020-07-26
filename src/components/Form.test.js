import React from "react";
import Immutable from "immutable";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Form from "./Form";
import formDefinition from "../config/form-definition-a";

let container = null;

const validData = Immutable.Map({
  name: "Bob",
  salary: 50000,
  age: 22,
});

const invalidData = Immutable.Map({
  name: "Bob",
  salary: 50000,
  age: -22,
});

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("submit button is disabled when data is invalid", () => {
  act(() => {
    render(
      <Form definition={formDefinition} initialData={invalidData} />,
      container
    );
  });

  expect(document.querySelector("button").disabled).toBe(true);
});

it("submit button is enabled when data is valid", () => {
  act(() => {
    render(
      <Form definition={formDefinition} initialData={validData} />,
      container
    );
  });

  expect(document.querySelector("button").disabled).toBe(false);
});
