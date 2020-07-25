import React from "react";
import Immutable from "immutable";
import trim from "lodash/trim";

import Form from "./components/Form";
import useForm from "./hooks/useForm";
import styles from "./App.module.css";

const FORM_FIELD_DEFINITIONS = Immutable.fromJS([
  {
    id: "name",
    label: "Name",
    type: "text",
    validator: (value) => trim(value) !== "" && !Number(value),
  },
  {
    id: "salary",
    label: "Salary",
    type: "number",
    constraints: { min: 0 },
    validator: (value) => trim(value) !== "" && Number(value),
  },
  {
    id: "age",
    label: "Age",
    type: "number",
    constraints: { min: 0 },
    validator: (value) => trim(value) !== "" && Number(value),
  },
]);

const App = () => {
  const {
    formData,
    formIsValid,
    handleChangeField,
    handleSubmitForm,
  } = useForm({
    apiUrl: "https://reqres.in/api/users",
    fieldDefinitions: FORM_FIELD_DEFINITIONS,
  });

  return (
    <div className={styles.root}>
      <Form
        definition={FORM_FIELD_DEFINITIONS}
        data={formData}
        onChangeField={handleChangeField}
        onSubmit={handleSubmitForm}
        isValid={formIsValid}
      />
    </div>
  );
};

export default App;
