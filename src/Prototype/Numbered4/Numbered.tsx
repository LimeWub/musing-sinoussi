import React from "react";
import "./Numbered.scss";
import { debounce } from "../../utility";
import { useNumbered } from "./NumberedProvider";
// import { Number } from "./Number";

const lineHeight = 1.2; // That's what u're getting sry! Too much of a deal to calculate it!
// const iWidth = 600;

export const Numbered = React.memo(({ className, children, ...rest }) => {
  const { numberRef, step } = useNumbered();

  const [el, setEl] = React.useState();
  const setElRef = React.useCallback((node) => {
    if (node) setEl(node);
  }, []);

  const hasSetInitialCSS = React.useRef(false);
  const [initialCSS, setInitialCSS] = React.useState({});
  const { width: iWidth, height: iHeight, fontSize: iFontSize } = initialCSS;

  const [currentCSS, setCurrentCSS] = React.useState({});
  const { width: cWidth } = currentCSS;
  // console.log({ initialCSS, currentCSS });

  const { cFontSize, cLineHeight } = React.useMemo(() => {
    if (!hasSetInitialCSS.current) {
      console.log("early return");
      return {};
    }
    const cFontSize = (iFontSize / iWidth) * cWidth;
    const cLineHeight = lineHeight * cFontSize;
    return { cFontSize, cLineHeight };
  }, [cWidth, iFontSize, iWidth]);

  const lines = React.useMemo(
    () => Math.round(iHeight / (iFontSize * lineHeight)),
    [iHeight, iFontSize]
  );

  const [lineStart, setLineStart] = React.useState(0);
  React.useEffect(() => {
    if (!lines || lineStart) return;
    setLineStart(numberRef.current + 1);

    console.log(numberRef.current, lines);
    numberRef.current += lines;
  }, [lines, lineStart]); // ughhhhhhh ????

  React.useEffect(() => {
    if (!el) return;

    const handleResize = () => {
      const elComputedStyle = window.getComputedStyle(el, null);
      console.log({ elComputedStyle });

      let elWidth = el.clientWidth;
      elWidth -=
        parseFloat(elComputedStyle.paddingLeft) +
        parseFloat(elComputedStyle.paddingRight);
      let elHeight = el.clientHeight;
      elHeight -=
        parseFloat(elComputedStyle.paddingTop) +
        parseFloat(elComputedStyle.paddingBottom);

      if (!hasSetInitialCSS.current) {
        hasSetInitialCSS.current = true;

        const elFontSize = parseFloat(elComputedStyle.fontSize);
        console.log(elComputedStyle.fontSize);

        setInitialCSS({
          fontSize: elFontSize,
          width: elWidth,
          height: elHeight
        });
      }

      setCurrentCSS({ width: elWidth, height: elHeight });
    };
    setTimeout(handleResize, 1000); // WTF happens on resize??? WHY DOES IT WORK ON RESIZE THIS IS SO CURSED! ;-;
    window.addEventListener("resize", debounce(handleResize, 200));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [el]);

  const lineNumberBlocks = React.useMemo(() => {
    // for lines
    // from numberRef
    // until numberRef + lines
    // if currentLine % step = 0
    // add number
    // otherwise add to block height and continue

    // Show hide opacity won't work - I need to check content or something.
    return (
      <div className="numbered__numbers">
        {Array(lines || 0)
          .fill(true)
          .map((_, i) => {
            const num = lineStart + i;
            return (
              <div
                className="numbered__number"
                style={{
                  height: `${cLineHeight}px`
                }}
                key={i}
              >
                {num % step === 0 ? num : ""}
              </div>
            );
          })}
      </div>
    );
  }, [lines, cLineHeight, step, lineStart]);

  return (
    <div className={`numbered ${className}`} {...rest}>
      {lineNumberBlocks}

      {React.cloneElement(React.Children.only(children), {
        ref: setElRef,
        className: `numbered__content ${children.props.className || ""}`,
        style: {
          ...(children.props.style || {}),
          width: cFontSize ? undefined : "600px",
          fontSize: cFontSize,
          lineHeight
        }
      })}
    </div>
  );
});
