import React from "react";
// import { useSlate } from "slate-react";
import { Element } from "../Newspaper/NewspaperElement";
import { Leaf } from "../Output/OutputLeaf";
import { Numbered } from "../Numbered4/Numbered";
import { NumberedProvider as Numbered4Provider } from "../Numbered4/NumberedProvider";

const doNotNumberElementsWithType = [
  "newspaper_title",
  "newspaper_subtitle",
  "li"
];

export const Output = ({ className, slateJson, ...rest }) => {
  const renderElement = ({ children, ...elementData }, ei) => {
    const { type } = elementData;

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

    let renderedElement = (
      <Element key={ei} element={elementData}>
        {renderedChildren}
      </Element>
    );
    console.log({ renderedElement });
    // @BUG! Numbered is bugged rn w infinite loop for renderedElement! Skip this until fixed!
    if (false || !doNotNumberElementsWithType.includes(type)) {
      renderedElement = <Numbered key={ei}>{renderedElement}</Numbered>;
    }
    return renderedElement;
  };

  return (
    <Numbered4Provider step={2}>
      {slateJson.map(renderElement)}
    </Numbered4Provider>
  );
};
