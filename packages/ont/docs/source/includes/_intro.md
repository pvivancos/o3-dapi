# Introduction

The Ontology dAPI standard, proposed in [OEP-6](https://github.com/ontio/OEPs/pull/8), details a general API for interacting with the Ontology blockchain, to be made available to dApp developers by wallet providers, such as O3.

## Improved user security

In the cryptocurrency space, the main focal point for securing ones funds is the protection of a users private key(s). All transactions signed with a users private key can be broadcast to the blockchain, and alter the state of their assets. In order to keep this information save, many users opt to keep their private keys secured offline, in a trusted wallet, or through the use of hardware wallets. On the other hand, dApp developers required access to a users private key to have them sign transactions related to the use of their application, which in turn leads to requesting users to provide the dApp with their private key. This is very dangerous, as the dApp developer now has full control over all over a users funds, and if the dApp is malicious, can simply empty a users account without their permission. This is where the dAPI steps in.

Users can minimize their security exposure footprint by reducing the number of apps that have access to their private keys. In many cases these users already have found a trusted wallet provider where they can securely manage their funds. Via the dAPI, users can continue to interact with dApps in the Ontology ecosystem without having to provide their private keys to every dApp. dApps that integrate with the dAPI can simply request users to sign a transaction by sending a message to the wallet provider with the transaction details. The wallet provider will prompt the user to sign the transaction from within the wallet application, and broadcast on their behalf. This is a simple, yet powerful tool, that allows users to safely interact with dApps with the confidence that the dApp will not be able to execute tranactions unknowingly on their behalf.

## Accelerated dApp development experience

When starting any new cryptocurrency related project, one of the first big tasks that many promising projects commit to is to provide users with a secure and robust wallet to interact with. Creating a quality wallet is no quick task, and it can distract projects from the original goal that they set out to accomplish. This becomes increasingly more true with the complexity of implementing different SDKs for different platforms or integrating with hardware wallets such as Ledger devices.

There are already a lot of great and trusted wallet providers in the cryptocurrency space, and the dAPI allows new projects to absolve themselves of the responsibility of creating yet another wallet. It is the hope of many that this will allow projects to focus them development attention to the real problem that the space is facing today, providing a myriad of robust and useful applications of blockchain technology.

## How does it work?

Web based projects can integrate the [o3-dapi-core](https://github.com/O3Labs/o3-dapi/tree/master/packages/core) and [o3-dapi-ont](https://github.com/O3Labs/o3-dapi/tree/master/packages/ont) Javascript packages into their project via CDN or NPM. The packages will take care of all communications with the Ontology blockchain and the O3 wallet. All functions called by the dApp are asynchronously processed, and users will be prompted via their O3 wallet to identify themselves to the dApp, and sign transactions.
