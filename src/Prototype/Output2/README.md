# Output2 (!WIP!)

Second try at doing output. This time it works with all elements but has logic to add a Numbered4 parent to any element which is not on the numbering exclusions.

## How does it work?

> Works paired with Numbered 4 to output richtext result.
> Expects to get its slateJson from a prop.
> Simply renders nested elements and if the element isn't in a 'Don't Number Me' sort of blacklist it wraps them in a Numbered4 (hoping to get numbers showing to the left)

## TODO

This component is WIP

> There's a marked @BUG when it wraps Numbered4 which causes an infinite loop only when Numbered4's child (renderedElement) is a forwardRef. No clue what's up there
> Numbered4 is also WIP with multiple bugs so these need to be addressed!
