import React from "react";
import "./ComprehensionOutput.scss";
import { useSlate } from "slate-react";
import { Element } from "./OutputElement";
import { Leaf } from "./OutputLeaf";
import { Numbered } from "../Numbered3/Numbered";

const NUMBERS_EVERY_X_LINES = 1;
const CHARS_PER_LINE = 60;

export const ComprehensionOutput = ({ className, ...rest }) => {
  const { children: slateJson } = useSlate();

  const { renderedElements, lines } = React.useMemo(() => {
    const lines = [];

    const renderElement = ({ children, ...elementData }, ei) => {
      let elementText = "";
      const renderedChildren = children.map((child, i) => {
        const key = `${ei}_${i}`;
        if (child?.children) {
          // Nested Element (ie. li)
          return renderElement(child, key);
        } else {
          // Leaf
          const { text, ...leafData } = child;
          elementText += text;
          return <Leaf key={key} leaf={leafData} children={text} />;
        }
      });

      const splitCopy = (copy) => {
        if (!copy) return;
        const match = `[\\b\\s]?.{${CHARS_PER_LINE},}?(?=\\s)|.+$`;
        const regex = new RegExp(match, "gm");
        return copy.replace(/\s+/g, " ").trim().match(regex);
      };

      const elementLines = splitCopy(elementText);
      console.log({ elementText, elementLines });
      const isList = ["bulleted-list", "numbered-list"].includes(
        elementData?.type
      );
      const isListItem = ["list-item"].includes(elementData?.type);

      if (elementLines || isListItem) {
        lines.push(...Array(elementLines?.length || 1).fill(true));
      }
      if (elementLines?.length && !isListItem) {
        lines.push(false);
      }
      if (isList) lines.push(false);
      console.log({ elementData });

      return (
        <Element key={ei} element={elementData}>
          {renderedChildren}
        </Element>
      );
    };

    const renderedElements = slateJson.map(renderElement);
    return { renderedElements, lines };
  }, [slateJson]);

  return (
    <Numbered
      className={`comprehension ${className}`}
      lines={lines}
      step={NUMBERS_EVERY_X_LINES}
      charsPerLine={CHARS_PER_LINE}
      {...rest}
    >
      {renderedElements}
    </Numbered>
  );
};
