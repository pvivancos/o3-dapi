# o3-dapi-pay
Simple Payments Plugin for o3-dapi

Requires o3-dapi-core to operate.

## Usage

In a browser - cdn [![](https://data.jsdelivr.com/v1/package/npm/o3-dapi-pay/badge)](https://www.jsdelivr.com/package/npm/o3-dapi-pay)
```
<script src="https://cdn.jsdelivr.net/npm/o3-dapi-pay/lib/o3-dapi-pay.min.js"></script>
```
```
window.o3dapiPay
```

Install via npm [![npm version](https://badge.fury.io/js/o3-dapi-pay.svg)](https://badge.fury.io/js/o3-dapi-pay)
```
npm i --save o3-dapi-pay

or

yarn add o3-dapi-pay
```

```
var o3dapiPay = require('o3-dapi-pay');

import o3dapiPay from 'o3-dapi-pay';
```

## Example
```
import o3dapi from 'o3-dapi-core';
import o3dapiPay from 'o3-dapi-pay';

o3dapi.initPlugins([o3dapiPay]);

o3dapi.PAY.send({
  asset: o3dapi.PAY.ASSETS.USDC,
  toAddress: 'ATphdznMVmtdREtr3nWAq4C5H4A8ioV4Bd',
  amount: '1'
})
.then(result => {
  const {
    asset,
    toAddress,
    amount,
    txid,
  };
  console.log('sent: ', txid);
})
.catch(err => {
  console.error('failed or rejected', err);
});
```
