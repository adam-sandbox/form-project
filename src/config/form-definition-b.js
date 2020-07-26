import Immutable from "immutable";
import { isValidString, isValidNumber } from "../utilities/validators";

export default Immutable.fromJS([
  {
    id: "phone",
    label: "Phone",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidNumber,
  },
  {
    id: "address",
    label: "Address",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidString,
  },
  {
    id: "postcode",
    label: "Postcode",
    config: { autoComplete: "off", spellCheck: false },
    validator: isValidNumber,
  },
]);
