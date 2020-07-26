import Immutable from "immutable";
import { useState, useCallback } from "react";

const useForm = ({ definition, api, initialData }) => {
  const initialState =
    initialData ||
    definition.reduce(
      (fields, field) => fields.set(field.get("id"), ""),
      Immutable.Map()
    );

  const [data, setData] = useState(initialState);
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
    if (!api || isLoading) return;
    setIsLoading(true);
    api
      .create(data.toJS())
      .then((response) => {
        setIsLoading(false);
        setData(initialState);
        setResult(response);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [api, isLoading, data, initialState]);

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
