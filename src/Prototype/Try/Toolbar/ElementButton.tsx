import { useSlate } from "slate-react";
import { isElementActive } from "../../slate-utility/element/isElementActive";
import { toggleElement } from "../../slate-utility/element/toggleElement";
import { Button, Icon } from "./base-components";
import { TEXT_ALIGN } from "../../slate-utility/constants/text-align";

export const ElementButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isElementActive(
        editor,
        format,
        TEXT_ALIGN.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleElement(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
