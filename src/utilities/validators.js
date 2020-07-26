import trim from "lodash/trim";

// Note these validators are very much placeholder...

const isNotEmpty = (value) => trim(value) !== "";

export const isValidString = (value) => isNotEmpty(value) && !Number(value);

export const isValidPositiveNumber = (value) =>
  isNotEmpty(value) && Number(value) && Number(value) > 0;

export const isValidDate = (value) => {
  // TODO: Support for multiple formats and validate accordingly
  // eg. dd/mm/yyyy
  return isNotEmpty(value) && isValidString(value);
};
