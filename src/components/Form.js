import React, { useState } from "react";

import styles from "./Form.module.css";
import FormField from "./FormField";

const Form = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <div className={styles.root}>
      <FormField label="Name" value={name} onChange={setName} />
      <FormField label="Salary" value={salary} onChange={setSalary} />
      <FormField label="Age" value={age} onChange={setAge} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
