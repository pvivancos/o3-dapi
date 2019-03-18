# o3-dapi-ontclient
Client plugin for o3-dapi-ont, which will move the logic for all read methods to the client side.

Requires o3-dapi-core & o3-dapi-ont to operate.

## Usage

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/o3-dapi-ontclient/badge)](https://www.jsdelivr.com/package/npm/o3-dapi-ontclient)
```
<script src="https://cdn.jsdelivr.net/npm/o3-dapi-ontclient/lib/o3-dapi-ontclient.min.js"></script>
```
```
window.o3dapiOntClient
```

Install via npm [![npm version](https://badge.fury.io/js/o3-dapi-ontclient.svg)](https://badge.fury.io/js/o3-dapi-ontclient)
```
npm i --save o3-dapi-ontclient

or

yarn add o3-dapi-ontclient
```

```
var o3dapiOntClient = require('o3-dapi-ont');

import o3dapiOntClient from 'o3-dapi-ontclient';
```

## Example
```
import o3dapi from 'o3-dapi-core';
import o3dapiOnt from 'o3-dapi-ont';
import o3dapiOntClient from 'o3-dapi-ontclient';

o3dapi.initPlugins([o3dapiOnt]);

o3dapi.ONT.setClientPlugin(o3dapiOntClient)

// o3 app does not need to be open, and site can be accessed from any browser to operate on same methods
o3dapi.ONT.getBalance({
  address: 'AScKxyXmNtEnTLTvbVhNQyTJmgytxhwSnM',
  network: 'MainNet',
})
.then(balances => console.log(balances));
```
