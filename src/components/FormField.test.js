import React from "react";
import Immutable from "immutable";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FormField from "./FormField";

let container = null;

const fieldDefinitionValid = Immutable.Map({
  id: "test",
  label: "Test",
  type: "text",
  validator: () => true,
});

const fieldDefinitionInvalid = Immutable.Map({
  id: "test",
  label: "Test",
  type: "text",
  validator: () => false,
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

it("renders correctly with a valid field definition", () => {
  act(() => {
    render(
      <FormField
        value="Test"
        onChange={() => {}}
        definition={fieldDefinitionValid}
      />,
      container
    );
  });
  expect(container.textContent).not.toBe(null);
});

it("renders correctly with an invalid field definition", () => {
  act(() => {
    render(
      <FormField
        value="Test"
        onChange={() => {}}
        definition={fieldDefinitionInvalid}
      />,
      container
    );
  });
  expect(container.textContent).not.toBe(null);
});
