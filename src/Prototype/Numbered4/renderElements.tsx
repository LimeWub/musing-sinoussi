// This is just output really
import * as React from "react";
import { Element } from "../Output/OutputElement";
import { Leaf } from "../Output/OutputLeaf";

export const renderElements = (slateJson) => {
  const renderElement = ({ children, ...elementData }, ei) => {
    const renderedChildren = children.map((child, i) => {
      const key = `${ei}_${i}`;
      if (child?.children) {
        // Nested Element (ie. li)
        return renderElement(child, key);
      } else {
        // Leaf
        const { text, ...leafData } = child;
        return <Leaf key={key} leaf={leafData} children={text} />;
      }
    });

    return (
      <Element key={ei} element={elementData}>
        {renderedChildren}
      </Element>
    );
  };

  const renderedElements = slateJson.map(renderElement);
  return renderedElements;
};
