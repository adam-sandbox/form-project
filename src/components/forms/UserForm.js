import React from "react";
import Immutable from "immutable";

import Form from "components/shared/form/Form";
import userApi from "utilities/userApi";
import {
  isValidString,
  isValidPositiveNumber,
  isValidDate,
} from "utilities/validators";

const formDefinition = Immutable.fromJS([
  {
    id: "name",
    label: "Name",
    type: "text",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidString,
  },
  {
    id: "salary",
    label: "Salary",
    type: "number",
    config: { min: 0, autoComplete: "off", spellCheck: false },
    validator: isValidPositiveNumber,
  },
  {
    id: "dob",
    label: "dd/mm/yyyy",
    type: "date",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidDate,
  },
]);

const UserForm = () => <Form definition={formDefinition} api={userApi} />;

export default UserForm;
