# Numbered3

Third attempt at a component that does line numbering.
Expands on second attempt.

## How does it work?

> Same as Second attempt but....
> Does NOT number empty lines
> Calculates lines in an element based charsPerLine + fontSize + a modifier of the font aspect ratio.
> Loops through elements to calculate if an additional empty line should be added to cover for the margin between element
> Depends on 'lines' logic in 'Output/ComprehensionOutput' These could potentially be combined but haven't figured it out yet

## Outputs something like:

```html
<div explanation="flexDirection: row">
  <div explanation="This is where the lhs numbers live">
    <div>1</div>
    <div>2</div>
    <div>
      3
      <!-- (this has double the height to cover the empty line)-->
    </div>
    <div>4</div>
    <div>5</div>
  </div>
  <div explanation="This is where the content lives">
    <h1>
      Same font size
    </h1>
    <p>
      splitting every 10 characters
    </p>
  </div>
</div>
```

## Why this is not the way to go?

> Insanely convoluted and needs to have too many things passed to it. Dependency on parent <Output /> to do 'lines' array.
> Does not take into account padded elements
> As all elements are wrapped in one component it's too difficult to split them out to only have SOME\* components numbered rather than all of them. This is problematic for things like the newspaper layout where only some areas expect numbers.
> As it depends on an assumed font aspect ratio is flimsy and can miscalculate line-breaks and font-sizes on edge cases. Doesn't allow for font variations.
> Minor: All elements have the same font-size
