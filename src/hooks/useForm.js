import Immutable from "immutable";
import { useState, useCallback } from "react";

import { create } from "../utilities/api";

const useForm = (definition, initialData) => {
  const data =
    initialData ||
    definition.reduce(
      (fields, field) => fields.set(field.get("id"), ""),
      Immutable.Map()
    );

  const [formData, setFormData] = useState(data);

  const formIsValid = definition.every((field) => {
    const fieldValidator = field.get("validator");
    const fieldValue = formData.get(field.get("id"));
    return fieldValidator(fieldValue);
  });

  const handleChangeField = (field, value) => {
    const fieldId = field.get("id");
    setFormData(formData.set(fieldId, value));
  };

  const handleSubmitForm = useCallback(() => {
    create(formData.toJS()).then((response) => {
      console.log(response);
    });
  }, [formData]);

  return {
    formData,
    formIsValid,
    handleChangeField,
    handleSubmitForm,
  };
};

export default useForm;
