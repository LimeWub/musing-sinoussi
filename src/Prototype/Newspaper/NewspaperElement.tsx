import {
  QUOTE as eQUOTE,
  LIST as eLIST,
  HEADING as eHEADING
} from "../slate-utility/constants/elements";

import { getElementFunction } from "../slate-utility/element/getElementComponent";

import { NewspaperTitle } from "./components/NewspaperTitle";
import { NewspaperSubtitle } from "./components/NewspaperSubtitle";
import { NewspaperArticleTitle } from "./components/NewspaperArticleTitle";
import { NewspaperArticleSubtitle } from "./components/NewspaperArticleSubtitle";
import { NewspaperArticleAuthor } from "./components/NewspaperArticleAuthor";
import { forwardRef } from "react";

const NEWSPAPER = {
  newspaper_title: NewspaperTitle,
  newspaper_subtitle: NewspaperSubtitle,
  title: NewspaperArticleTitle,
  subtitle: NewspaperArticleSubtitle,
  author: NewspaperArticleAuthor
};

const elements = {
  ...eQUOTE,
  ...eLIST,
  ...eHEADING,
  ...NEWSPAPER
};

// (!) The below refactor is an attempt to get ref forwarding to work. Alas
export const Element = forwardRef((props, ref) => {
  const Component = getElementFunction(elements);
  return <Component {...props} ref={ref} />;
});
