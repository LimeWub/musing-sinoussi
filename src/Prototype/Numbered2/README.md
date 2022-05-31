Second attempt at a component that does line numbering.

How does it work?

> Expects children (as you'd hope)
> Doesn't try to split any spans, works with nested children
> Calculates + applies font size based on 'charsPerLine'
> Forces ALL nested children to the calculated font size (heading same height as paragraph)
> Forces ALL vertical margins between elements to the line height
> Forces NO vertical paddings
> Does step every X lines (Currently hardcoded 5)

Outputs something like:

```html
<div explanation="flexDirection: row">
  <div explanation="This is where the lhs numbers live">
    <div>1</div>
    <div>2</div>
    <div>
      3
      <!-- (even tho empty line)-->
    </div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
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

Why this is not the way to go?

> Numbers empty lines
> Minor: All elements have the same font-size
> Hasn't been tested with elements of variable padding but assuming it would have bad results as it wouldn't take padding into account
