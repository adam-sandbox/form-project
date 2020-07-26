import React from "react";
import Immutable from "immutable";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Form from "./Form";
import formDefinition from "../config/form-definition-a";

let container = null;

const validData = Immutable.Map({
  name: "Test",
  salary: "50000",
  age: 34,
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

it("renders as expected", () => {
  act(() => {
    render(
      <Form definition={formDefinition} initialData={validData} />,
      container
    );
  });
  expect(container.textContent).not.toBe(null);
});
