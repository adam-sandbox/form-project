import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

import FormField from "./FormField";
import useForm from "../hooks/useForm";
import styles from "./Form.module.css";

const Form = ({ definition, initialData }) => {
  const {
    formData,
    formIsValid,
    handleChangeField,
    handleSubmitForm,
  } = useForm(definition, initialData);

  return (
    <div className={styles.root}>
      {definition.map((field) => (
        <FormField
          key={field.get("id")}
          definition={field}
          value={formData.get(field.get("id"))}
          onChange={handleChangeField}
        />
      ))}
      <button disabled={!formIsValid} onClick={handleSubmitForm}>
        Submit
      </button>
    </div>
  );
};

Form.propTypes = {
  definition: ImmutablePropTypes.listOf(
    ImmutablePropTypes.mapContains({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      validator: PropTypes.func.isRequired,
    }).isRequired
  ).isRequired,
  initialData: ImmutablePropTypes.map,
};

export default Form;
