# o3-dapi-core
Core messaging protocol.

Accepts plugins for different blockchains.

A plugin is required for use.

## Usage

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/o3-dapi-core/badge)](https://www.jsdelivr.com/package/npm/o3-dapi-core)
```
<script src="https://cdn.jsdelivr.net/npm/o3-dapi-core/packages/o3-dapi-core/lib/browser/o3-dapi-core.min.js"></script>
```
```
window.o3dapi
```

Install via npm [![npm version](https://badge.fury.io/js/o3-dapi-core.svg)](https://badge.fury.io/js/o3-dapi-core)
```
npm i --save o3-dapi-core

or

yarn add o3-dapi-core
```

```
var o3dapi = require('o3-dapi-core');

import o3dapi from 'o3-dapi-core';
```

## Example
```
o3dapi.initPlugins([<neo_plugin>, <ont_plugin>]);
```
