import React, { useCallback } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import classnames from "classnames";
import trim from "lodash/trim";

import styles from "./FormField.module.css";

const FormField = ({ definition, value, type, disabled, onChange }) => {
  const handleChange = useCallback(
    (event) => onChange(definition, event.target.value),
    [definition, onChange]
  );

  const isValid = trim(value) === "" || definition.get("validator")(value);

  const config = definition.has("config")
    ? definition.get("config").toJS()
    : {};

  return (
    <div className={styles.root} title={definition.get("label")}>
      <input
        type={type}
        value={value}
        placeholder={definition.get("label")}
        className={classnames(styles.field, {
          [styles.error]: !isValid,
        })}
        onChange={handleChange}
        disabled={disabled}
        {...config}
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
    type: PropTypes.oneOf(["text", "number", "date"]).isRequired,
    validator: PropTypes.func.isRequired,
    config: ImmutablePropTypes.mapContains({
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
