# Newspaper

An example of a rich text editor with forced layout to match the Newspaper style of comprehension. It uses the initialValue to both populate the editor and maintain its structure. For the forced layout logic behind this, look at `slate-utility/editor/withForcedLayout`.
It includes all (most of) the components needed to display a newspaper layout, which can be used both in the editor and the output.

## Try it out:

import:

```tsx
import { Newspaper } from "./Newspaper/Newspaper";
```

then in the ender just:

```tsx
<Newspaper />
```
