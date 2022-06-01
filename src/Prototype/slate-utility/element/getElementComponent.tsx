import * as React from "react";

export const getElementFunction = (elements) => {
  const getElement = ({ type }) => elements?.[type] || "p";

  const Component = React.forwardRef(
    ({ attributes, children, element }, ref) => {
      const style = { textAlign: element.align };
      const Element = getElement({ type: element?.type });
      return (
        <Element style={style} ref={ref} {...attributes}>
          {children}
        </Element>
      );
    }
  );

  return Component;
};
