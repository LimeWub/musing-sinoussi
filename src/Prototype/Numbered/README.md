First attempt at a component that does line numbering.

How does it work?

> Expects text rather than children
> Forces text fontSize/lineHeight based on character count
> Splits text based on character count (keeps full words)
> Wraps spans around split text
> Plonks text in a 'p' component (could be modified to support more options)
> Does line numbers by adding a :before element on the span and doing a counter on that.

Outputs something like:

```html
<p>
  <span>splitting </span>
  <span>every 10 </span>
  <span>characters</span>
</p>
```

... with before elements on every span doing a counter.

Why this is not the way to go?

> Expecting simple text is very inflexible, doesn't work for bold/italics (and other marks), doesn't work with any other nested elements like lists
> Hasn't been tested with elements of variable padding but assuming it would have bad results as it wouldn't take padding into account
