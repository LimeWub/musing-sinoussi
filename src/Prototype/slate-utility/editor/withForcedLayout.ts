// Relevant Slate example: https://github.com/ianstormtaylor/slate/blob/main/site/examples/forced-layout.tsx

import { Transforms, Node, Element as SlateElement } from "slate";
import cloneDeep from "lodash.clonedeep";

export const withForcedLayout = (forcedLayout, editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      const cIndexes = editor.children.length - 1;
      const fIndexes = forcedLayout?.length - 1;
      for (let i = cIndexes; i < fIndexes; i++) {
        const forcedValueForIndex = forcedLayout[i];
        if (!forcedValueForIndex) continue;
        Transforms.insertNodes(editor, cloneDeep(forcedValueForIndex), {
          at: path.concat(i)
        });
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        const slateIndex = childPath[0];

        const enforceType = (type) => {
          if (SlateElement.isElement(child) && child.type !== type) {
            const newProperties: Partial<SlateElement> = { type };
            Transforms.setNodes<SlateElement>(editor, newProperties, {
              at: childPath
            });
          }
        };

        const forcedTypeForIndex = forcedLayout?.[slateIndex]?.type;
        if (forcedTypeForIndex) enforceType(forcedTypeForIndex);
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};
