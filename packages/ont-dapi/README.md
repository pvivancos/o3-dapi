# ont-dapi
A standalone bundle for interfacing with the Ontology blockchain

## Usage

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/ont-dapi/badge)](https://www.jsdelivr.com/package/npm/ont-dapi)
```
<script src="https://cdn.jsdelivr.net/npm/ont-dapi/lib/ont-dapi.min.js"></script>
```
```
window.o3dapiOntClient
```

Install via npm [![npm version](https://badge.fury.io/js/ont-dapi.svg)](https://badge.fury.io/js/ont-dapi)
```
npm i --save ont-dapi

or

yarn add ont-dapi
```

```
var ontDapi = require('ont-dapi');

import ontDapi from 'ont-dapi';
```

## Example
```
import ontDapi from 'ont-dapi';

ontDapi.getBalance({
  address: 'AScKxyXmNtEnTLTvbVhNQyTJmgytxhwSnM',
  network: 'MainNet',
})
.then(balances => console.log(balances));
```
