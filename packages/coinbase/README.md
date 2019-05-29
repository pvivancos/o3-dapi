# o3-dapi-coinbase
Coinbase Plugin for o3-dapi

Requires o3-dapi-core to operate.

## Usage

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/o3-dapi-coinbase/badge)](https://www.jsdelivr.com/package/npm/o3-dapi-coinbase)
```
<script src="https://cdn.jsdelivr.net/npm/o3-dapi-coinbase/lib/o3-dapi-coinbase.min.js"></script>
```
```
window.o3dapiCoinbase
```

Install via npm [![npm version](https://badge.fury.io/js/o3-dapi-coinbase.svg)](https://badge.fury.io/js/o3-dapi-coinbase)
```
npm i --save o3-dapi-coinbase

or

yarn add o3-dapi-coinbase
```

```
var o3dapiCoinbase = require('o3-dapi-coinbase');

import o3dapiCoinbase from 'o3-dapi-coinbase';
```

## Example
```
import o3dapi from 'o3-dapi-core';
import o3dapiCoinbase from 'o3-dapi-coinbase';

o3dapi.initPlugins([o3dapiCoinbase]);

o3dapi.COINBASE.connect({token: abc123})
.then(result => console.log(result));
```
