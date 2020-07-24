import React, { useCallback } from "react";

const FormField = ({ label, value, onChange }) => {
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <label>
      {label}
      <input type="text" value={value} onChange={handleChange}></input>
    </label>
  );
};

export default FormField;
