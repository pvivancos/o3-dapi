# o3-dapi-ont
Ontology Plugin for o3-dapi

Requires o3-dapi-core to operate.

## Usage

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/o3-dapi-ont/badge)](https://www.jsdelivr.com/package/npm/o3-dapi-ont)
```
<script src="https://cdn.jsdelivr.net/npm/o3-dapi-ont/lib/o3-dapi-ont.min.js"></script>
```
```
window.o3dapiOnt
```

Install via npm [![npm version](https://badge.fury.io/js/o3-dapi-ont.svg)](https://badge.fury.io/js/o3-dapi-ont)
```
npm i --save o3-dapi-ont

or

yarn add o3-dapi-ont
```

```
var o3dapiOnt = require('o3-dapi-ont');

import o3dapiOnt from 'o3-dapi-ont';
```

## Example
```
import o3dapi from 'o3-dapi-core';
import o3dapiOnt from 'o3-dapi-ont';

o3dapi.initPlugins([o3dapiOnt]);

o3dapi.ONT.getNetworks()
.then(networks => console.log(networks));
```
