# Numbered4

WIP COMPONENT

After realising Numbered3 was a glimpse into insanity and all the problems it could potentially have with nested children of varying paddings/margins/indents/font-sizes (any variety really), our heroes move on to the next try: Do things more granular.

## How does it work?

> <Numbered4 /> expects only a single block element child. This allows for attaching it to specific output only. For example in a comprehension w a heading it can be attached to only each of the 'content' elements rather than Headings and other areas not to be numbered.
> Uses a provider parent (NumberedProvider) to keep step and current line number stored. (@BUGGED when component children update!)
> On all children: Force line-height so I don't go insane trying to calculate it BUT keeps font-size as it was originally (proportionate to a set parent width -currently goes with 600px style on parent to calculate-) (@BUGGED until first resize?)
> Gets initial element CSS: Width, Height, fontSize (we will need this to calculate things later)
> Based on initial (height / lineHeight) calculate number of lines on init, maintain line numbers the same at all times.

## It's broken:

> Something happens on load which fucks up the fontSizes, resizing fixes this but there's a bug to fix here.
> Line numbers are FLIMSY! They have been half arsed to get it somewhat working and there's logic problems rn. Need to rethink how line numbers should be updated and reset when the content changes! Make storing the current line number on the parent more solid!
> Last minute thoughts: I am considering a simple parent rather than a provider could make resetting and counting the line numbers easier?

## Use like this:

```tsx
<Numbered4Provider step={2}>
  <Numbered4>
    <h1>
      Heading of multiple lines. Heading of multiple lines. Heading of multiple
      lines. Heading of multiple lines. Heading of multiple lines. Heading of
      multiple lines.
    </h1>
  </Numbered4>

  <Numbered4>
    <p>
      This is editable rich text, much better than a textarea! Since it's rich
      text, you can do things like turn a selection of text bold, or add a
      semantically rendered block quote in the middle of the page, like this: A
      wise quote.
    </p>
  </Numbered4>

  <Numbered4>
    <ul>
      <li> list item </li>
      <li> list item </li>
      <li> list item </li>
      <li> list item </li>
    </ul>
  </Numbered4>
</Numbered4Provider>
```

## Output:

```html
<div>
  <div explanation="The line numbers go here">
    <div explanation="line number"></div>
    <div explanation="line number"></div>
    <div explanation="line number"></div>
    <div explanation="line number"></div>
  </div>
  <h1>
    Heading of multiple lines. Heading of multiple lines. Heading of multiple
    lines. Heading of multiple lines. Heading of multiple lines. Heading of
    multiple lines.
  </h1>
</div>

<div>
  <div explanation="The line numbers go here">
    <div explanation="line number"></div>
    <div explanation="line number"></div>
    <div explanation="line number"></div>
  </div>
  <p>
    This is editable rich text, much better than a textarea! Since it's rich
    text, you can do things like turn a selection of text bold, or add a
    semantically rendered block quote in the middle of the page, like this: A
    wise quote.
  </p>
</div>

<div>
  <div explanation="The line numbers go here">
    <div explanation="line number"></div>
    <div explanation="line number"></div>
    <div explanation="line number"></div>
    <div explanation="line number"></div>
  </div>
  <ul>
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>
    <li>list item</li>
  </ul>
</div>
```
