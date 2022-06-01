All the slate specific utility is stored here.
Currently it's split up by "area".
These should be all the basic things needed to utilise SlateJs effectively for our current project. However, if more stuff is needed or you want to see where I got these from check these links:

- Slate Examples
  rich text: https://www.slatejs.org/examples/richtext
  forced layout: https://www.slatejs.org/examples/forced-layout
  markdown shortcuts: https://www.slatejs.org/examples/markdown-shortcuts

- Slate docs: https://docs.slatejs.org/

/constants

> Anything that is a constant, which I have split in the most reusable way I could (usually per element/decoration family) to reuse in multiple editors

- elements
  Used for renderElement function in Slate editor and output

- hotkeys
  Used to feed to onKeydownMark which is then given to an Editor to process keyboard commands -> elements

- marks (UNUSED)
  Same idea as elements, to be used in renderMark (Leaf) - but currently unused as getMarkComponent is too simple.

- shortcuts
  MARKDOWN shortcuts to be fed to a withShortcuts editor, to allow for things like `> I'm a blockquote` getting transformed to the appropriate element in slateJson

- text-align
  The values of the text-align decoration, these are applied in renderElements if needed.

/editor

> withEditorModification files

- withForcedLayout
  Will do anything possible to maintain the initialValue layout passed to it. If the entire value is emptied by the user it will default it to the initialValue.
  This is useful for any custom editor layouts like: Newspaper, Letter, Play.

- withShortcuts
  Allows the use of MARKDOWN shortcuts in the Editor. eg: `# Heading 1`, `* list item`. Works with whatever shortcuts it's fed but will need tweaking for any additional nested shortcuts (lists -bulleted/numbered- are currently supported)

/element

> All utilities relating to renderingElements

- getElementComponent
  Gets fed an elements array to match elements from. Given `elementData` from a slateJson object; Looks into the supplied elements and get the one to render.

  eg.

  ```ts
  const Component = getElementFunction({'bulleted-list', 'ul'});
  return <Component elementData={{type: 'bulleted-list'}} /> // <ul>{children}</ul>
  ```

- isElementActive
  Checks if an element is active currently on the editor. eg. Are we currently editing a Heading1?

- toggleElement
  Toggles element active on/off. Defaults type to "paragraph"

/mark

> All utilities relating to rendering Marks or Leaves
> For context, an element can have elements or leaves as children, but a Leaf is always just a simple piece of text with one of limited decorations: `bold`, `italic`, `code`, `underline`

- getMarkComponent
  Similar to getElementComponent but significantly simpler as it handles 'Leaf', and leaves can only do `bold`, `italic`, `code`, `underline`.

- isMarkActive
  Same as isElementActive but for a mark

- onKeydownMark
  Used to apply hotkeys to an editor on keydown. Feed it an object of 'hotkeys' and you can do keyboard shortcuts to add marks in your editor now.

- toggleMark
  Toggles a mark active on/off
