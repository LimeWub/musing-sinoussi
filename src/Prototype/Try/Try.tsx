import React, { useCallback, useMemo } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor, Descendant } from "slate";
import { ComprehensionOutput } from "../Output/ComprehensionOutput";

import { Toolbar } from "../Toolbar/Toolbar";
import { withHistory } from "slate-history";
import { withShortcuts } from "../slate-utility/editor/withShortcuts";
import {
  TEXT_DECORATION,
  FONT_WEIGHT,
  FONT_STYLE,
  CODE
} from "../slate-utility/constants/hotkeys";
import { getOnKeydownMarkFunction } from "../slate-utility/mark/onKeydownMark";
import {
  QUOTE as eQUOTE,
  LIST as eLIST,
  HEADING as eHEADING
} from "../slate-utility/constants/elements";
import {
  QUOTE as sQUOTE,
  LIST as sLIST,
  HEADING as sHEADING
} from "../slate-utility/constants/shortcuts";
import { getElementFunction } from "../slate-utility/element/getElementComponent";
import { getMarkFunction } from "../slate-utility/mark/getMarkComponent";

const hotkeys = {
  ...TEXT_DECORATION,
  ...FONT_WEIGHT,
  ...FONT_STYLE,
  ...CODE
};

const shortcuts = {
  ...sQUOTE,
  ...sLIST,
  ...sHEADING
};

const elements = {
  ...eQUOTE,
  ...eLIST,
  ...eHEADING
};
export const Element = (props) => getElementFunction(elements).render(props);

export const Leaf = (props) => getMarkFunction().render(props);

export const Try = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withShortcuts(shortcuts, withHistory(withReact(createEditor()))),
    []
  );

  return (
    <Slate editor={editor} value={initialValue}>
      <Toolbar />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={getOnKeydownMarkFunction(hotkeys, editor)}
      />
      <ComprehensionOutput />
    </Slate>
  );
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text, " },
      { text: "much", italic: true },
      { text: " better than a " },
      { text: "<textarea>", code: true },
      { text: "!" }
    ]
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text "
      },
      { text: "bold", bold: true },
      {
        text:
          ", or add a semantically rendered block quote in the middle of the page, like this:"
      }
    ]
  },
  {
    type: "block-quote",
    children: [{ text: "A wise quote." }]
  },
  {
    type: "paragraph",
    align: "center",
    children: [{ text: "Try it out for yourself!" }]
  }
];
