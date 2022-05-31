import * as React from "react";

export const NewspaperArticleSubtitle = React.forwardRef(
  ({ children, style, ...rest }, ref) => (
    <p
      style={{
        ...style,
        fontFamily: "sans-serif",
        fontSize: "2rem",
        margin: 0,
        borderBottom: "1px solid"
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </p>
  )
);
