import React from "react";

import styles from "./Form.module.css";
import FormField from "./FormField";

const Form = ({ definition, data, isValid, onChangeField, onSubmit }) => {
  return (
    <div className={styles.root}>
      {definition.map((field) => (
        <FormField
          key={field.get("id")}
          definition={field}
          value={data.get(field.get("id"))}
          onChange={onChangeField}
        />
      ))}
      <button disabled={!isValid} onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
