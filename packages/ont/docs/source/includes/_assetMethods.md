# Asset Methods

## getBalance

Fetch the ONT and ONG balance of a given account.

```typescript
o3dapi.ONT.asset.getBalance({
  network: 'MainNet',
  address: 'AeysVbKWiLSuSDhg7DTzUdDyYYKfgjojru',
})
.then((balance: Balance) => {
  const {
    ont,
    ong,
  } = balance;

  console.log('ONT balance: ' + ont);
  console.log('ONG balance: ' + ong);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case RPC_ERROR:
      console.log('There was an error when broadcasting this transaction to the network.');
      break;
  }
});
```

> Example Response

```typescript
{
  ong: '100.04985783',
  ont: '999'
}
```

Return the ONT

### Success Response
| Parameter | Type   | Description                    |
|:--------- |:------ |:------------------------------ |
| ont       | String | The ONT balance of the account |
| ong       | String | The ONG balance of the account |

### Error Response
| Parameter   | Type    | Description                                  |
|:----------- |:------- |:-------------------------------------------- |
| type        | String  | The type of error which has occured          |
| description | String  | A description of the error which has occured |
| data        | String? | Any raw data associated with the error       |

## getUnboundOng

Fetch the claimable ONG amount for a given account.

```typescript
o3dapi.ONT.asset.getUnboundOng({
  network: 'MainNet',
  address: 'AeysVbKWiLSuSDhg7DTzUdDyYYKfgjojru',
})
.then(({amount: string}) => {
  console.log('Claimable ONG balance: ' + amount);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case RPC_ERROR:
      console.log('There was an error when broadcasting this transaction to the network.');
      break;
  }
});
```

> Example Response

```typescript
{
  amount: '1.04985783'
}
```

### Success Response
| Parameter | Type   | Description              |
|:--------- |:------ |:------------------------ |
| amount    | String | The claimable ONG amount |

### Error Response
| Parameter   | Type    | Description                                  |
|:----------- |:------- |:-------------------------------------------- |
| type        | String  | The type of error which has occured          |
| description | String  | A description of the error which has occured |
| data        | String? | Any raw data associated with the error       |

## getGrantOng

Fetch the ONG amount granted to a given account.

```typescript
o3dapi.ONT.asset.getGrantOng({
  network: 'MainNet',
  address: 'AeysVbKWiLSuSDhg7DTzUdDyYYKfgjojru',
})
.then(({amount: string}) => {
  console.log('Claimable ONG balance: ' + amount);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case RPC_ERROR:
      console.log('There was an error when broadcasting this transaction to the network.');
      break;
  }
});
```

> Example Response

```typescript
{
  amount: '1.04985783'
}
```

### Success Response
| Parameter | Type   | Description              |
|:--------- |:------ |:------------------------ |
| amount    | String | The claimable ONG amount |

### Error Response
| Parameter   | Type    | Description                                  |
|:----------- |:------- |:-------------------------------------------- |
| type        | String  | The type of error which has occured          |
| description | String  | A description of the error which has occured |
| data        | String? | Any raw data associated with the error       |

## getAllowance

Fetch the amount of a given asset that was pre-allocation from one account to another.

```typescript
o3dapi.ONT.asset.getAllowance({
  network: 'MainNet',
  fromAddress: 'AeysVbKWiLSuSDhg7DTzUdDyYYKfgjojru',
  toAddress: 'AGchtbL3ibh9qG1n9KXJusEuAjjSWTsLyk',
  asset: 'ONT',
})
.then(({amount: string}) => {
  console.log('Allocated amount: ' + amount);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case RPC_ERROR:
      console.log('There was an error when broadcasting this transaction to the network.');
      break;
  }
});
```

> Example Response

```typescript
{
  amount: '1.04985783'
}
```

### Success Response
| Parameter | Type   | Description                                                    |
|:--------- |:------ |:-------------------------------------------------------------- |
| amount    | String | Allocation amount of a given asset from one account to another |

### Error Response
| Parameter   | Type    | Description                                  |
|:----------- |:------- |:-------------------------------------------- |
| type        | String  | The type of error which has occured          |
| description | String  | A description of the error which has occured |
| data        | String? | Any raw data associated with the error       |

## send


Fetch the amount of a given asset that was pre-allocation from one account to another.

```typescript
o3dapi.ONT.asset.send({
  network: 'MainNet',
  from: 'AeysVbKWiLSuSDhg7DTzUdDyYYKfgjojru',
  to: 'AGchtbL3ibh9qG1n9KXJusEuAjjSWTsLyk',
  asset: 'ONG',
  amount: '0.00000001'
})
.then(({txid, nodeUrl}: SendOutput) => {
  console.log('Send transaction success!');
  console.log('Transaction ID: ' + txid);
  console.log('RPC node URL: ' + nodeUrl);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case SEND_ERROR:
      console.log('There was an error when broadcasting this transaction to the network.');
      break;
    case MALFORMED_INPUT:
      console.log('The receiver address provided is not valid.');
      break;
    case CANCELED:
      console.log('The user has canceled this transaction.');
      break;
    case INSUFFICIENT_FUNDS:
      console.log('The user has insufficient funds to execute this transaction.');
      break;
  }
});
```

> Example Response

```typescript
{
  txid: 'ed54fb38dff371be6e3f96e4880405758c07fe6dd1295eb136fe15f311e9ff77',
  nodeUrl: 'http://polaris1.ont.io:20334',
}
```

The send API can be used for accepting payments from the user in a cryptocurrency that is located on the Ontology blockchain. It requires user authentication in order for the transaction to be relayed. The transaction will be relayed by the wallet.

### Input Arguments
| Parameter | Type   | Description                                                                                                                   |
|:--------- |:------ |:----------------------------------------------------------------------------------------------------------------------------- |
| from      | String | The address from where the transaction is being sent. This will be the same value as the one received from the getAccount API |
| to        | String | The address to where the user should send their funds                                                                         |
| asset     | String | The asset which is being requested for payment (e.g ONT or ONG)                                                               |
| amount    | String | The amount which is being requested for payment                                                                               |
| network   | String | Network alias to submit this request to.                                                                                      |

### Success Response
| Parameter | Type   | Description                                                                   |
|:--------- |:------ |:----------------------------------------------------------------------------- |
| txid      | String | The transaction id of the send request which can be queried on the blockchain |
| nodeURL   | String | The node to which the transaction was submitted to.                           |

<aside class="warning">
It is recommended that the DAPP take appropriate levels of risk prevention when accepting transactions. The dapp can query the mempool of a known node to ensure that the transaction will indeed be broadcast on the network.
</aside>

### Error Response
| Parameter   | Type    | Description                                  |
|:----------- |:------- |:-------------------------------------------- |
| type        | String  | The type of error which has occured          |
| description | String  | A description of the error which has occured |
| data        | String? | Any raw data associated with the error       |
