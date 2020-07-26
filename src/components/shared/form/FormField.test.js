import React from "react";
import Immutable from "immutable";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FormField from "./FormField";
import { isValidPositiveNumber, isValidString } from "utilities/validators";

let container = null;

const numberFieldDefinition = Immutable.Map({
  id: "test",
  label: "Test",
  type: "number",
  validator: isValidPositiveNumber,
});

const stringFieldDefinition = Immutable.Map({
  id: "test",
  label: "Test",
  type: "text",
  validator: isValidString,
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

it("validation alert is displayed for a number field containing a string value", () => {
  act(() => {
    render(
      <FormField
        value="Test"
        onChange={() => {}}
        definition={numberFieldDefinition}
      />,
      container
    );
  });

  expect(document.querySelectorAll(".validationAlert").length).toBe(1);
});

it("validation alert is displayed for a string field containing a numeric value", () => {
  act(() => {
    render(
      <FormField
        value={1234}
        onChange={() => {}}
        definition={stringFieldDefinition}
      />,
      container
    );
  });

  expect(document.querySelectorAll(".validationAlert").length).toBe(1);
});

it("validation alert isn't displayed for a number field containing a numeric value", () => {
  act(() => {
    render(
      <FormField
        value={1234}
        onChange={() => {}}
        definition={numberFieldDefinition}
      />,
      container
    );
  });

  expect(document.querySelectorAll(".validationAlert").length).toBe(0);
});

it("validation alert isn't displayed for a string field containing a string value", () => {
  act(() => {
    render(
      <FormField
        value="Hello"
        onChange={() => {}}
        definition={stringFieldDefinition}
      />,
      container
    );
  });

  expect(document.querySelectorAll(".validationAlert").length).toBe(0);
});
