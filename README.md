# What is easy-quotes?

easy-quotes is a simple dependencyless quotes manager that can get you quotes submitted by many people with varying options for how much control you want to have over the formatting and type.

# Installation

To install, run `npm install easy-quotes`

# Usage 

```
const eq = require('easy-quotes')

const inspirationalQuote = eq.getQuote({ categories: ['Inspirational'] })
```

## Options

easy-quotes have multiple simple options to change what type of quote you want and how it is formatted

* *categories* - _ ['ALL' | 'Fun' | 'Inspirational' | 'Motivational' | 'Funny' | 'Exciting' | 'Rude'] (Defaults to ["ALL"])_
* *length* - _ number (Defaults to 20)_
* *includesNSFW* - _ boolean (Defaults to false)_
* *forProffessionalUse* - _ boolean (Defaults to false)_
* *authorNameFormat* - _ 'AllLong' | 'AllShort' | 'FirstLong MiddleShort LastLong' | 'FirstShort MiddleShort LastLong' (Defaults to 'AllLong')_

