import React from "react";

import Form from "./components/Form";
import formDefinitionA from "./config/form-definition-a";
import formDefinitionB from "./config/form-definition-b";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.formContainer}>
        <Form definition={formDefinitionA} />
        <Form definition={formDefinitionB} />
      </div>
    </div>
  );
};

export default App;
