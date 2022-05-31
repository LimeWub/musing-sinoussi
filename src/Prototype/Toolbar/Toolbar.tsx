import * as React from "react";
import { MarkButton } from "./MarkButton";
import { ElementButton } from "./ElementButton";

export const Toolbar = React.forwardRef((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      style={{
        display: "flex",
        flexFlow: "row wrap"
      }}
    >
      <MarkButton format="bold" icon="format_bold" />
      <MarkButton format="italic" icon="format_italic" />
      <MarkButton format="underline" icon="format_underlined" />
      <MarkButton format="code" icon="code" />
      <ElementButton format="heading-one" icon="looks_one" />
      <ElementButton format="heading-two" icon="looks_two" />
      <ElementButton format="block-quote" icon="format_quote" />
      <ElementButton format="numbered-list" icon="format_list_numbered" />
      <ElementButton format="bulleted-list" icon="format_list_bulleted" />
      <ElementButton format="left" icon="format_align_left" />
      <ElementButton format="center" icon="format_align_center" />
      <ElementButton format="right" icon="format_align_right" />
      <ElementButton format="justify" icon="format_align_justify" />
    </div>
  );
});
