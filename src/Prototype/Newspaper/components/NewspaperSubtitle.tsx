import * as React from "react";

export const NewspaperSubtitle = React.forwardRef(
  ({ children, style, ...rest }, ref) => (
    <p
      style={{
        ...style,
        fontFamily: "cursive",
        textAlign: "center",
        fontWeight: "bold",
        borderBottom: "1px solid"
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </p>
  )
);
