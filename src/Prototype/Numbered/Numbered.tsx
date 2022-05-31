import React from "react";
import "./Numbered.scss";
import { debounce } from "../../utility";

export const Numbered = ({ children: copy, charsPerLine = 40, ...rest }) => {
  console.log({
    copy
  });

  const splitCopy = React.useMemo(() => {
    const match = `[\\b\\s]?.{${charsPerLine},}?(?=\\s)|.+$`;
    const regex = new RegExp(match, "gm");
    return copy.match(regex);
  }, [copy, charsPerLine]);

  const el = React.useRef();
  const setEl = React.useCallback((node) => {
    if (node) el.current = node;
  }, []);

  const [width, setWidth] = React.useState(0);
  const getWidth = () => el?.current?.offsetWidth;
  const fontSize = React.useMemo(() => (width / charsPerLine) * 1.5, [
    width,
    charsPerLine
  ]);

  React.useEffect(() => {
    const handleResize = () => setWidth(getWidth());
    handleResize();
    window.addEventListener("resize", debounce(handleResize, 200));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <p ref={setEl} className="numbered" style={{ fontSize }} {...rest}>
      {splitCopy?.map((value, index) => (
        <span key={index} className="numbered_line">
          {value}
        </span>
      ))}{" "}
    </p>
  );
};
