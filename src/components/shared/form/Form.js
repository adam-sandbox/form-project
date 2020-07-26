import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

import FormField from "./FormField";
import FormButton from "./FormButton";
import FormNotification from "./FormNotification";
import useForm from "hooks/useForm";
import styles from "./Form.module.css";

const Form = ({ definition, api, initialData }) => {
  const {
    data,
    result,
    isValid,
    isLoading,
    handleChangeField,
    handleSubmitForm,
  } = useForm({ definition, api, initialData });

  return (
    <div className={styles.root}>
      <div className={styles.fields}>
        {definition.map((field) => (
          <FormField
            key={field.get("id")}
            type={field.get("type")}
            definition={field}
            value={data.get(field.get("id"))}
            disabled={isLoading}
            onChange={handleChangeField}
          />
        ))}
      </div>
      <FormButton
        label="Submit"
        disabled={!isValid}
        loading={isLoading}
        onClick={handleSubmitForm}
      />
      {result && result.id && (
        <FormNotification message={`User ${result.id} was created`} />
      )}
    </div>
  );
};

Form.propTypes = {
  definition: ImmutablePropTypes.listOf(
    ImmutablePropTypes.mapContains({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      validator: PropTypes.func.isRequired,
    }).isRequired
  ).isRequired,
  initialData: ImmutablePropTypes.map,
  api: PropTypes.shape({
    create: PropTypes.func,
  }),
};

export default Form;
