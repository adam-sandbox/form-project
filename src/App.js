import React from "react";

import UserForm from "./components/forms/UserForm";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.root}>
      <UserForm />
    </div>
  );
};

export default App;
