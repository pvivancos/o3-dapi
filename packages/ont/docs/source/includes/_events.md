# Events
Events are a way for the wallet to asynchronously with the DAPP when certain changes occur to the state of the wallet that might be relevant for the

## READY
On a READY event, the callback will fire with a single argument with information about the wallet provider. At any time a READY event listener is added, it will immidiately be called if the provider is already in a ready state. This provides a single flow for dapp developers since this listener should start any and all interactions with the dapi protocol.

| Parameter     | Type     | Description                                        |
|:------------- |:-------- |:-------------------------------------------------- |
| name          | String   | Name of the provider                               |
| website       | String   | Website of the provider                            |
| version       | String   | Version of the dAPI whih the provider supports     |
| compatibility | String[] | List of NEP's which the dAPI provider will support |


## ACCOUNT_CHANGED
On a ACCOUNT_CHANGED event, the callback will fire with a single argument of the new account. In the case that the user logs out without providing a new account to connect, this will be null.

| Parameter | Type   | Description                   |
|:--------- |:------ |:----------------------------- |
| address   | String | Address of the new account    |
| publicKey | String | Public Key of the new account |
