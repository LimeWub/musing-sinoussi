import React from "react";
import "./Numbered.scss";
import { debounce } from "../../utility";

export const Numbered = ({
  className,
  children,
  charsPerLine,
  lines,
  step,
  ...rest
}) => {
  const el = React.useRef();
  const setEl = React.useCallback((node) => {
    if (node) el.current = node;
  }, []);

  const [width, setWidth] = React.useState(0);

  // MODIFIER HERE VERY IMPORTANT!!!
  // ADJUST PER FONT AND BE AS ACCURATE AS POSSIBLE!
  //(NON-MONOSPACED FONT MEANS THIS IS NEVER 100% ACCURATE!
  // CONSIDER MONO FONT: Consolas? Adobe Source Code Sans)
  const fontSize = React.useMemo(() => (width * 1.9) / charsPerLine, [
    width,
    charsPerLine
  ]);

  const lineHeight = 1.2;

  React.useEffect(() => {
    const handleResize = () => {
      const wrapperComputedStyle = window.getComputedStyle(el?.current, null);
      let wrapperWidth = el?.current?.clientWidth;
      wrapperWidth -=
        parseFloat(wrapperComputedStyle.paddingLeft) +
        parseFloat(wrapperComputedStyle.paddingRight);
      setWidth(wrapperWidth);
    };
    handleResize();
    window.addEventListener("resize", debounce(handleResize, 200));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const lineNumberBlocks = React.useMemo(() => {
    if (!lines.length) return;

    const blocks = [];
    let filledLinesCounter = 0;
    let totalLinesCounter = 0;
    for (let l = 0; l <= lines.length; l++) {
      totalLinesCounter += 1;
      const isLineFilled = lines[l];
      if (isLineFilled) filledLinesCounter += 1;
      if (filledLinesCounter === step) {
        blocks.push(totalLinesCounter);
        totalLinesCounter = 0;
        filledLinesCounter = 0;
      }
    }

    console.log({ blocks, lines });

    return (
      <div className="numbered__numbers">
        {blocks.map((blockLines, i) => (
          <div
            className="numbered__number"
            style={{ height: `${lineHeight * fontSize * blockLines}px` }}
          >
            {(i + 1) * step}
          </div>
        ))}
      </div>
    );
  }, [lines, fontSize, step]);

  return (
    <div
      className={`numbered ${className}`}
      style={{
        fontSize,
        lineHeight
      }}
      {...rest}
    >
      {lineNumberBlocks}
      <div ref={setEl} className="numbered__children">
        {children}
      </div>
    </div>
  );
};
