import React from "react";
import { action } from "@storybook/addon-actions";
import Form from "./Form";

export default {
  title: "Form",
  component: Form,
};

export const Default = () => <Form onSubmit={action("submit")} />;
