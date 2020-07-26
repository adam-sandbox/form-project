import trim from "lodash/trim";

export const isValidString = (value) => trim(value) !== "" && !Number(value);

export const isValidNumber = (value) =>
  trim(value) !== "" && Number(value) && Number(value) > 0;
