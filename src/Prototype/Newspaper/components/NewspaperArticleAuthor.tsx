import * as React from "react";

export const NewspaperArticleAuthor = React.forwardRef(
  ({ children, style, ...rest }, ref) => {
    return (
      <p
        style={{
          ...style,
          fontFamily: "sans-serif",
          fontStyle: "italic",
          fontWeight: "bold"
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </p>
    );
  }
);
