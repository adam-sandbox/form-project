import React, { useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./FormButton.module.css";

const FormButton = ({ label, disabled, loading, onClick }) => {
  const handleClick = useCallback(() => {
    if (!disabled && !loading) onClick();
  }, [disabled, loading, onClick]);

  return (
    <button
      className={classnames(styles.root, {
        [styles.disabled]: disabled,
        [styles.loading]: loading,
      })}
      disabled={disabled}
      onClick={handleClick}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

FormButton.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

FormButton.defaultProps = {
  disabled: false,
  loading: false,
};

export default FormButton;
