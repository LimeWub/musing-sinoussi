import * as React from "react";

export const getElementFunction = (elements) => {
  const getElement = ({ type }) => elements?.[type] || "p";

  const render = ({ attributes, children, element }) => {
    const style = { textAlign: element.align };
    const Element = getElement({ type: element?.type });
    return (
      <Element style={style} {...attributes}>
        {children}
      </Element>
    );
  };

  return { render };
};
