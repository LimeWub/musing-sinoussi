import * as React from "react";

export const NewspaperTitle = React.forwardRef(
  ({ children, style, ...rest }, ref) => (
    <h1
      style={{
        ...style,
        fontFamily: "serif",
        textTransform: "uppercase",
        textAlign: "center"
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </h1>
  )
);
