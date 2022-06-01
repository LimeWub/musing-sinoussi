# Output

1st available version, (!) works only with Numbered3

## How does it work?

> Works paired with Numbered 3 to output richtext result.
> Expects to get its slateJson from a parent <Slate> provider.
> When rendering its elements it also uses a regular expression to split their nested text (same as Numbered1).
> It then produces a 'lines' array which is an Array<boolean> type of deal where `lines = [true, true, false, true]` means 2 numbered lines, 1 empty line, 1 numbered line.
> Does some ifs to count lines appropriately specifically for nested <li> elements.
> It then passes down that lines array to Numbered3

## Why this is not the way to go?

> It is insane that I even thought of this solution and the only way forward with it would be a big refactor to move the line counting logic out of there (not sure how rn)
> It has the same fallbacks as the Numbered3 component. It assumes too much about the actual font-size and font ratio (lineHeight/fontWidth). It also assumes too much about the paddings some elements might have, like indented element or a blockquote.
> All in all it works sometimes but it's a flaud solution.
