import isHotkey from "is-hotkey";
import { toggleMark } from "./toggleMark";

export const getOnKeydownMarkFunction = (hotkeys, editor) => {
  const onKeydownMark = (event) => {
    for (const hotkey in hotkeys) {
      if (isHotkey(hotkey, event as any)) {
        event.preventDefault();
        const mark = hotkeys[hotkey];
        toggleMark(editor, mark);
      }
    }
  };
  return onKeydownMark;
};
