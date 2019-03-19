# o3-dapi-neoclient
Client plugin for o3-dapi-neo, which will move the logic for all read methods to the client side.

Requires o3-dapi-core & o3-dapi-neo to operate.

## Usage

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/o3-dapi-neoclient/badge)](https://www.jsdelivr.com/package/npm/o3-dapi-neoclient)
```
<script src="https://cdn.jsdelivr.net/npm/o3-dapi-neoclient/lib/o3-dapi-neoclient.min.js"></script>
```
```
window.o3dapiNeoClient
```

Install via npm [![npm version](https://badge.fury.io/js/o3-dapi-neoclient.svg)](https://badge.fury.io/js/o3-dapi-neoclient)
```
npm i --save o3-dapi-neoclient

or

yarn add o3-dapi-neoclient
```

```
var o3dapiNeoClient = require('o3-dapi-neoclient');

import o3dapiNeoClient from 'o3-dapi-neoclient';
```

## Example
```
import o3dapi from 'o3-dapi-core';
import o3dapiNeo from 'o3-dapi-neo';
import o3dapiNeoClient from 'o3-dapi-neoclient';

o3dapi.initPlugins([o3dapiNeo]);

o3dapi.NEO.setClientPlugin(o3dapiNeoClient)

// o3 app does not need to be open, and site can be accessed from any browser to operate on same methods
o3dapi.NEO.getBalance({
  params: [{address: 'AScKxyXmNtEnTLTvbVhNQyTJmgytxhwSnM'}],
  network: 'MainNet',
})
.then(balances => console.log(balances));
```
