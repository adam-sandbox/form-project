import React, { useCallback } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import trim from "lodash/trim";

import styles from "./FormField.module.css";

const FormField = ({ definition, value, onChange }) => {
  const handleChange = useCallback(
    (event) => onChange(definition, event.target.value),
    [definition, onChange]
  );
  const isValid = trim(value) === "" || definition.get("validator")(value);
  const constraints = definition.has("constraints")
    ? definition.get("constraints").toJS()
    : {};

  return (
    <label title={definition.get("label")}>
      {definition.get("label")}
      <input
        type={definition.get("type")}
        value={value}
        onChange={handleChange}
        className={!isValid ? styles.validationError : null}
        {...constraints}
      />
    </label>
  );
};

FormField.propTypes = {
  definition: ImmutablePropTypes.mapContains({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
    constraints: ImmutablePropTypes.mapContains({
      min: PropTypes.number.isRequired,
    }),
  }),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
