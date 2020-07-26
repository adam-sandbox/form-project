import React from "react";
import { action } from "@storybook/addon-actions";

import FormButton from "./FormButton";

export default {
  title: "FormButton",
  component: FormButton,
};

export const Default = () => (
  <FormButton label="Button" onClick={action("click")} />
);

export const Loading = () => (
  <FormButton label="Button" onClick={action("click")} loading />
);

export const Disabled = () => (
  <FormButton label="Button" onClick={action("click")} disabled />
);
