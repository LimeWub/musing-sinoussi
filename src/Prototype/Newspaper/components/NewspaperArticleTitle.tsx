import * as React from "react";

export const NewspaperArticleTitle = React.forwardRef(
  ({ children, style, ...rest }, ref) => (
    <h2
      style={{
        ...style,
        fontFamily: "serif",
        textTransform: "uppercase",
        fontSize: "4rem",
        margin: 0
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </h2>
  )
);
