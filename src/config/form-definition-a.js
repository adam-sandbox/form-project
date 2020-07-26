import Immutable from "immutable";
import { isValidString, isValidNumber } from "../utilities/validators";

export default Immutable.fromJS([
  {
    id: "name",
    label: "Name",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidString,
  },
  {
    id: "salary",
    label: "Salary",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidNumber,
  },
  {
    id: "age",
    label: "Age",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidNumber,
  },
]);
