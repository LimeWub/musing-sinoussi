import {
  QUOTE as eQUOTE,
  LIST as eLIST,
  HEADING as eHEADING
} from "../slate-utility/constants/elements";

import { getElementFunction } from "../slate-utility/element/getElementComponent";

const elements = {
  ...eQUOTE,
  ...eLIST,
  ...eHEADING
};

export const Element = (props) => {
  return getElementFunction(elements).render(props);
};
