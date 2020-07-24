import React, { useCallback } from "react";

import Form from "./components/Form";
import { post } from "./utilities/api";
import styles from "./App.module.css";

const API_URL = "https://reqres.in/api/users";

const App = () => {
  const handleSubmit = useCallback((data) => {
    post(API_URL, data).then((response) => console.log(response));
  }, []);

  return (
    <div className={styles.root}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
