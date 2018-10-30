# webO3-core
Core messaging protocol.

Accepts plugins for different blockchains.

A plugin is required for use.

## Usage

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/webO3-core/badge)](https://www.jsdelivr.com/package/npm/webO3-core)
```
<script src="https://cdn.jsdelivr.net/npm/webO3-core/packages/webO3-core/lib/browser/webO3-core.min.js"></script>
```
```
window.webO3
```

Install via npm [![npm version](https://badge.fury.io/js/webO3-core.svg)](https://badge.fury.io/js/webO3-core)
```
npm i --save webO3-core

or

yarn add webO3-core
```

```
var webO3 = require('webO3-core');

import webO3 from 'webO3-core';
```

## Example
```
webO3.initPlugins([<neo_plugin>, <ont_plugin>]);
```
