import Immutable from "immutable";
import trim from "lodash/trim";

export default Immutable.fromJS([
  {
    id: "phone",
    label: "Phone",
    type: "number",
    config: { min: 0 },
    validator: (value) => trim(value) !== "" && Number(value),
  },
  {
    id: "address",
    label: "Address",
    type: "text",
    config: { autoComplete: "off", spellCheck: false },
    validator: (value) => trim(value) !== "" && !Number(value),
  },
  {
    id: "postcode",
    label: "Postcode",
    type: "number",
    config: { min: 0 },
    validator: (value) =>
      trim(value) !== "" && Number(value) && Number(value) > 0,
  },
]);
