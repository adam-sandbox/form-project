import React from "react";
import PropTypes from "prop-types";

import styles from "./FormNotification.module.css";

const FormNotification = ({ message }) => (
  <div className={styles.root}>{message}</div>
);

FormNotification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FormNotification;
