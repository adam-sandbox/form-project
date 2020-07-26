import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

import FormField from "./FormField";
import FormButton from "./FormButton";
import useForm from "../hooks/useForm";
import styles from "./Form.module.css";

const Form = ({ definition, initialData }) => {
  const {
    data,
    result,
    isValid,
    isLoading,
    handleChangeField,
    handleSubmitForm,
  } = useForm(definition, initialData);

  return (
    <div className={styles.root}>
      {definition.map((field) => (
        <FormField
          key={field.get("id")}
          definition={field}
          value={data.get(field.get("id"))}
          disabled={isLoading}
          onChange={handleChangeField}
        />
      ))}
      <FormButton
        label="Submit"
        disabled={!isValid}
        loading={isLoading}
        onClick={handleSubmitForm}
      />
      {result && result.id && <div>{`User ${result.id} was created`}</div>}
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
