import React, { useCallback } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import classnames from "classnames";
import trim from "lodash/trim";

import styles from "./FormField.module.css";

const FormField = ({ definition, value, disabled, onChange }) => {
  const handleChange = useCallback(
    (event) => onChange(definition, event.target.value),
    [definition, onChange]
  );

  const isValid = trim(value) === "" || definition.get("validator")(value);

  const constraints = definition.has("constraints")
    ? definition.get("constraints").toJS()
    : {};

  return (
    <div className={styles.root} title={definition.get("label")}>
      <input
        type="text"
        value={value}
        placeholder={definition.get("label")}
        className={classnames(styles.field, {
          [styles.error]: !isValid,
        })}
        onChange={handleChange}
        disabled={disabled}
        {...constraints}
      />
      {!isValid && (
        <div title="Validation error" className={styles.validationAlert}>
          !
        </div>
      )}
    </div>
  );
};

FormField.propTypes = {
  definition: ImmutablePropTypes.mapContains({
    label: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
    constraints: ImmutablePropTypes.mapContains({
      min: PropTypes.number,
      autoComplete: PropTypes.string,
      spellCheck: PropTypes.bool,
    }),
  }),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

FormField.defaultProps = {
  disabled: false,
};

export default FormField;
