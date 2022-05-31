import React from "react";
import { useNumbered } from "./NumberedProvider";

export const Number = ({ ...rest }) => {
  const { step } = useNumbered();

  const [el, setEl] = React.useState();
  const setElRef = React.useCallback((node) => {
    if (node) setEl(node);
  }, []);

  if (el) console.log(el);
  // const isVisible = !el || window.getComputedStyle(el).content

  return <div ref={setElRef} {...rest} />;
};
