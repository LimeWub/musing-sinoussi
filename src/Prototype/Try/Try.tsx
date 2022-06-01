import React, { useCallback, useMemo } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor } from "slate";
import { Output } from "../Output/Output";

import { initialValue } from "./initialValue";
import { Toolbar } from "./Toolbar/Toolbar";
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
  QUOTE as sQUOTE,
  LIST as sLIST,
  HEADING as sHEADING
} from "../slate-utility/constants/shortcuts";
import { Element } from "./Element";
import { Leaf } from "./Leaf";

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
      <Output />
    </Slate>
  );
};
