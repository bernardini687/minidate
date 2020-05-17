# minidate

_shape a date from minimal input_

simple helper to get a Date out of a day value, defaulting the rest to the current date.

# usage

```
miniDate([value, [separator='-']]) => Date

  [value] (Number | String) : just the day value
  [value] (String)          : DD[-MM[-YYYY]]
  [separator='-'] (String)  : one of . / _ ,
```

```ts
import * as minidate from 'https://deno.land/x/minidate/mod.ts'

// imagine today is the 5th of November 2020

minidate.shape()             // output : new Date(2020, 10, 5)
minidate.shape(3)            // output : new Date(2020, 10, 3)
minidate.shape('4-7')        // output : new Date(2020, 6, 4)
minidate.shape('7.01', '.')  // output : new Date(2020, 0, 7)
minidate.shape('12-11-1990') // output : new Date(1990, 10, 12)
```

# misc

this is also available on npm as [shape-date](https://www.npmjs.com/package/shape-date).
