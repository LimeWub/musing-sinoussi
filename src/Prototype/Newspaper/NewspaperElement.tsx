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

export const NewspaperElement = (props) => {
  return getElementFunction(elements).render(props);
};
