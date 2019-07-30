# neo-dapi
A standalone bundle for interfacing with the NEO blockchain

## Usage

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/neo-dapi/badge)](https://www.jsdelivr.com/package/npm/neo-dapi)
```
<script src="https://cdn.jsdelivr.net/npm/neo-dapi/lib/neo-dapi.min.js"></script>
```
```
window.o3dapiOntClient
```

Install via npm [![npm version](https://badge.fury.io/js/neo-dapi.svg)](https://badge.fury.io/js/neo-dapi)
```
npm i --save neo-dapi

or

yarn add neo-dapi
```

```
var neoDapi = require('neo-dapi');

import neoDapi from 'neo-dapi';
```

## Example
```
import neoDapi from 'neo-dapi';

neoDapi.getBalance({
  params: [{address: 'AScKxyXmNtEnTLTvbVhNQyTJmgytxhwSnM'}],
  network: 'MainNet',
})
.then(balances => console.log(balances));
```
