# jp-rail-symbols
More stuff coming soon.

This is a repository of React components that produce the rail line and station symbols used in Japan (and perhaps other places in the future), given the name of a line. Most (all) of the symbols are based on or are direct rip-offs of the ones used on Wikipedia, since they have HTML recreations or SVGs of them. I want to use these symbols in an itinerary website of a trip to Japan that I'm planning.

The website here is only for testing and yes I'm using jQuery and React. So packages `jquery` and `gh-pages` are not actually necessary for this.

## Usage
Use `StationSymbol` and `LineSymbol`, which can both be imported from [`src/index.tsx`](src/index.tsx). I will also probably create a `RailRoute` component which would be more specific to my itinerary website.

Both `StationSymbol` and `LineSymbol` require a `line` prop for the line name and `StationSymbol` also requires a `number` prop to set the station number. The format of `line` is as follows (the components are case-sensitive and most of the time everything is all caps):

```
<companyAbbr>:<lineAbbr>[:<stationAbbr>]
```

* `companyAbbr` is the abbreviation of the company which operates the line. Many of the abbreviations are the same as the ones used in Wikipedia's symbol templates and can basically be found [here](https://en.wikipedia.org/wiki/Template:SNList) in the Shortcut column (take off the "SN" though). Some of them I made up myself and I should probably put them here but they can also be found in [`src/rail-data.ts`](src/rail-data.ts) since the full names are included there. If the abbreviation is not recognized, a generic symbol (just a colored rectangle) will be used.
* `lineAbbr` is the abbreviation used for the line. I think all of them will be official abbreviations so they can be found somewhere on Wikipedia or again in [`src/rail-data.ts`](src/rail-data.ts). If the line is not recognized, `lineColor` will be set to black and `textColor` will be set to white.
* `stationAbbr` is only used for major JR East stations which have an additional black border around the symbol and an abbreviation for that station. These are not hard-coded anywhere.

In addition to `line` and `number`, you can also set `lineColor`, `textColor`, and `size`.

* `lineColor` sets/overrides the main color of the symbol, i.e. the line color. For some symbols, you can't override this completely or at all because more than one color is used.
* `textColor` sets/overrides the color used for the line abbreviation on the symbol. If the station number uses the same color, this also changes that. But some symbols use different colors for the line and number, and this will only change the line.

## Adding More Symbols
If you want to add or change the lines for a company which already has a symbol in here, just edit [`src/rail-data.ts`](src/rail-data.ts). If you want to add a new company, use one of the existing ones as a template (except `GenericStationSymbol`) and add it to the corresponding folder. Then you'll need to make an import in the folder's `index.ts` and also put it in the exported object there.

## Style Guidelines (mostly for me)
* Documentation strings where appropriate.
* Type annotations for functions and important hardcoded (`const`) objects.
* Try to keep lines under 80 characters but that's not a hard rule. At least do it for comments.
* Two blank lines before and after classes and one for functions.
