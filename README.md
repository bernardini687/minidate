# minidate

_shape a date from minimal input_

simple helper to get a Date out of a day value, defaulting the rest to the current date.

# usage

```
miniDate(value) => Date

  value (Number | String) : just the day value
  value (String)          : DD[-MM[-YYYY]]
```

```ts
import miniDate from 'https://deno.land/x/minidate@v1.0/mod.ts'

// imagine today is the 5th of November 2020

miniDate()             // output : 2020-11-05[...]
miniDate(3)            // output : 2020-11-03[...]
miniDate('4-7')        // output : 2020-07-04[...]
miniDate('07-01')      // output : 2020-01-07[...]
miniDate('12-11-1990') // output : 1990-11-12[...]
miniDate(32)           // output : Invalid Date
```

# misc

this is also available on npm as [shape-date](https://www.npmjs.com/package/shape-date).
