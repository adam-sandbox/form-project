import Immutable from "immutable";
import { useState, useCallback } from "react";

import { create } from "../utilities/api";

const useForm = (definition, initialState) => {
  const initialData =
    initialState ||
    definition.reduce(
      (fields, field) => fields.set(field.get("id"), ""),
      Immutable.Map()
    );

  const [data, setData] = useState(initialData);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isValid = definition.every((field) => {
    const fieldValidator = field.get("validator");
    const fieldValue = data.get(field.get("id"));
    return fieldValidator(fieldValue);
  });

  const handleChangeField = useCallback(
    (field, value) => {
      const fieldId = field.get("id");
      setData(data.set(fieldId, value));
    },
    [data]
  );

  const handleSubmitForm = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    create(data.toJS())
      .then((response) => {
        setIsLoading(false);
        setData(initialData);
        setResult(response);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [isLoading, data, initialData]);

  return {
    data,
    result,
    isValid,
    isLoading,
    handleChangeField,
    handleSubmitForm,
  };
};

export default useForm;
