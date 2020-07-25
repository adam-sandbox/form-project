import { useState, useCallback } from "react";
import Immutable from "immutable";

import { post } from "../utilities/api";

const useForm = ({ apiUrl, fieldDefinitions }) => {
  const [formData, setFormData] = useState(
    Immutable.Map({
      name: "",
      salary: "",
      age: "",
    })
  );

  const formIsValid = fieldDefinitions.every((field) => {
    const fieldValidator = field.get("validator");
    const fieldValue = formData.get(field.get("id"));
    return fieldValidator(fieldValue);
  });

  const handleChangeField = (field, value) => {
    const fieldId = field.get("id");
    setFormData(formData.set(fieldId, value));
  };

  const handleSubmitForm = useCallback(() => {
    post(apiUrl, formData.toJS()).then((response) => {
      console.log(response);
    });
  }, [apiUrl, formData]);

  return {
    formData,
    formIsValid,
    handleChangeField,
    handleSubmitForm,
  };
};

export default useForm;
