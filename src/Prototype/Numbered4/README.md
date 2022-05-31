Cursed try number 4!

How does it work?

> <Numbered4 /> expects only a single block element child. This allows for attaching it to specific output only. For example in a comprehension w a heading it can be attached to only each of the 'content' elements rather than Headings and other areas not to be numbered.
> Uses a provider parent (NumberedProvider) to keep step and current line number stored.
> On all children: Force line-height so I don't go insane BUT keep font-size
> Get initial element CSS: Width, Height, fontSize (we will need this to calculate things later)
> Based on initial (height / lineHeight) calculate number of lines

It's broken:

> Something happens on load which fucks up the fontSizes, resizing fixes this but there's a bug to fix here.
> Line numbers are FLIMSY! They have been half arsed to get it somewhat working and there's logic problems rn. Need to rething how line numbers should be done! Make storing the current line number on the parent more solid!
