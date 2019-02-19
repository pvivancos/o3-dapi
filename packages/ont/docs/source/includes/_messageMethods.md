# Message Methods

## signMessage

```typescript
o3dapi.ONT.message.signMessage({
  message: 'Hello World!',
})
.then((signedMessage: SignedMessage) => {
  const {
    publicKey,
    message,
    salt,
    data,
  } = signedMessage;

  console.log('Public key used to sign:', publicKey);
  console.log('Original message:', message);
  console.log('Salt added to message:', salt);
  console.log('Signed data:', data);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case UNKNOWN_ERROR:
      console.log(description);
      break;
  }
});
```

> Example Response

```typescript
{
  publicKey: '0241392007396d6ef96159f047967c5a61f1af0871ecf9dc82afbedb68afbb949a',
  data: '0147fb89d0999e9d8a90edacfa26152fe695ec8b3770dcad522048297ab903822e12472364e254ff2e088fc3ebb641cc24722c563ff679bb1d1623d08bd5863d0d',
  salt: '058b9e03e7154e4db1e489c99256b7fa',
  message: 'Hello World!',
}
```

Signs a provided messaged with an account selected by user. A salt prefix is added to the input string, and provided as a part of the data while signing. In the example, the signed value would be `058b9e03e7154e4db1e489c99256b7faHello World!`.

### Input Arguments

| Parameter     | Type     | Description                                                      |
|:------------- |:-------- |:---------------------------------------------------------------- |
| message       | String   | The message to sign                                              |

### Success Response

| Parameter     | Type     | Description                                                      |
|:------------- |:-------- |:---------------------------------------------------------------- |
| publicKey     | String   | The public key used to sign message                              |
| data          | String   | The signed data                                                  |
| salt          | String   | The salt prefix added to the original message before signing     |
| message       | String   | The original message                                             |


### Error Response

| Parameter   | Type    | Description                                   |
|:----------- |:------- |:--------------------------------------------  |
| type        | String  | The type of error which has occurred          |
| description | String  | A description of the error which has occurred |
| data        | String? | Any raw data associated with the error        |


## verifyMessage

```typescript
o3dapi.ONT.message.verifyMessage({
  message: '058b9e03e7154e4db1e489c99256b7faHello World!',
  data: '0147fb89d0999e9d8a90edacfa26152fe695ec8b3770dcad522048297ab903822e12472364e254ff2e088fc3ebb641cc24722c563ff679bb1d1623d08bd5863d0d',
  publicKey: '0241392007396d6ef96159f047967c5a61f1af0871ecf9dc82afbedb68afbb949a',
})
.then(({response: bool}) => {
  console.log('Signature data matches provided message and public key: ' + response);
})
.catch(({type: string, description: string, data: any}) => {
  switch(type) {
    case NO_PROVIDER:
      console.log('No provider available.');
      break;
    case CONNECTION_DENIED:
      console.log('The user rejected the request to connect with your dApp');
      break;
  }
});
```

> Example Response

```typescript
{
  result: true,
}
```

Returns whether the provided signature data matches the provided message and was signed by the account of the provided public key.

### Input Arguments

| Parameter   | Type    | Description                                            |
|:----------- |:------- |:--------------------------------------------           |
| message     | String  | The original signed message                            |
| data        | String  | The signature data                                     |
| publicKey   | String  | The public key of the account used to sign the message |

### Success Response

| Parameter      | Type     | Description                                                             |
|:-------------- |:-------- |:------------------------------------------------------------------      |
| result       | Boolean | Whether the provided signature matches the provided message and public key |

### Error Response
| Parameter   | Type    | Description                                   |
|:----------- |:------- |:--------------------------------------------  |
| type        | String  | The type of error which has occurred          |
| description | String  | A description of the error which has occurred |
| data        | String? | Any raw data associated with the error        |
