import React from "react";
import { action } from "@storybook/addon-actions";
import FormField from "./FormField";

export default {
  title: "FormField",
  component: FormField,
};

export const Default = () => (
  <FormField label="Label" onChange={action("changed")} />
);
