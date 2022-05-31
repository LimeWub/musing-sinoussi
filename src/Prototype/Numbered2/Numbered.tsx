import React from "react";
import "./Numbered.scss";
import { debounce } from "../../utility";

export const Numbered = ({
  className,
  children,
  charsPerLine = 40,
  ...rest
}) => {
  console.log({ children });

  const el = React.useRef();
  const setEl = React.useCallback((node) => {
    if (node) el.current = node;
  }, []);

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const fontSize = React.useMemo(() => (width / charsPerLine) * 1.5, [
    width,
    charsPerLine
  ]);

  const lineHeight = 1.2;
  const blockHeight = React.useMemo(() => fontSize * lineHeight * 5, [
    fontSize,
    lineHeight
  ]);
  const howManyBlocks = Math.ceil(height / blockHeight);
  const howManyBlocksArr = React.useMemo(
    () => howManyBlocks && Array(howManyBlocks).fill(true),
    [howManyBlocks]
  );
  console.log({ howManyBlocks, a: howManyBlocksArr });
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(el?.current?.offsetWidth);
      setHeight(el?.current?.offsetHeight);
    };
    handleResize();
    window.addEventListener("resize", debounce(handleResize, 200));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={setEl}
      className={`numbered ${className}`}
      style={{
        fontSize,
        lineHeight,
        "--lineHeight": lineHeight
      }}
      {...rest}
    >
      {howManyBlocksArr.length && (
        <div className="numbered__numbers">
          {howManyBlocksArr.map((v, i) => (
            <div
              className="numbered__number"
              style={{ height: `${lineHeight * fontSize * 5}px` }}
            >
              {(i + 1) * 5}
            </div>
          ))}
        </div>
      )}

      <div className="numbered__children">{children}</div>
    </div>
  );
};
