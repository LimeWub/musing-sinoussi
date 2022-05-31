import React, { useCallback } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { withForcedLayout } from "../slate-utility/editor/withForcedLayout";
import { NewspaperElement } from "./NewspaperElement";
import { initialValue } from "./initialValue";

export const ComprehensionNewspaper = () => {
  const renderElement = useCallback(
    (props) => <NewspaperElement {...props} />,
    []
  );
  // https://github.com/ianstormtaylor/slate/issues/4081#issuecomment-780936732
  const [editor] = React.useState(
    withForcedLayout(initialValue, withHistory(withReact(createEditor())))
  );

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
        placeholder="Enter a title…"
        spellCheck
        autoFocus
      />
    </Slate>
  );
};
