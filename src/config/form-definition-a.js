import Immutable from "immutable";
import trim from "lodash/trim";

export default Immutable.fromJS([
  {
    id: "name",
    label: "Name",
    type: "text",
    config: { autoComplete: "off", spellCheck: false },
    validator: (value) => trim(value) !== "" && !Number(value),
  },
  {
    id: "salary",
    label: "Salary",
    type: "number",
    config: { min: 0 },
    validator: (value) => trim(value) !== "" && Number(value),
  },
  {
    id: "age",
    label: "Age",
    type: "number",
    config: { min: 0 },
    validator: (value) => trim(value) !== "" && Number(value),
  },
]);
