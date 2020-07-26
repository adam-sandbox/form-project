import React from "react";
import Immutable from "immutable";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { isValidString, isValidPositiveNumber } from "utilities/validators";
import Form from "./Form";

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

const mockValidData = Immutable.Map({
  fieldA: "test",
  fieldB: 100,
});

const mockInvalidData = Immutable.Map({
  fieldA: "test",
  fieldB: "test",
});

let container = null;

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
      <Form definition={mockFormDefinition} initialData={mockInvalidData} />,
      container
    );
  });

  expect(document.querySelector("button").disabled).toBe(true);
});

it("submit button is enabled when data is valid", () => {
  act(() => {
    render(
      <Form definition={mockFormDefinition} initialData={mockValidData} />,
      container
    );
  });

  expect(document.querySelector("button").disabled).toBe(false);
});
