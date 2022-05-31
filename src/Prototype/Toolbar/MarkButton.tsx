import { useSlate } from "slate-react";
import { isMarkActive } from "../slate-utility/mark/isMarkActive";
import { toggleMark } from "../slate-utility/mark/toggleMark";
import { Button, Icon } from "./base-components";

export const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
