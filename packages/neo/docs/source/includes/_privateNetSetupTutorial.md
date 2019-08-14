## Setting up a private net

In the case that you would like to start developing your own smart contracts, you will want to use a private net.

In order to get this setup, you will need to have [Docker](https://store.docker.com/search?type=edition&offering=community) installed on your computer.

Clone down the O3 provided private net.
https://github.com/O3Labs/neo-privatenet-docker

```
make
```
Once cloned, navigate to the repo in your terminal, and simply execute the command:

This will trigger the Docker image to be downloaded to your machine, and will spin up your private net.

Upon starting up, your terminal should be in the NEO Python CLI.

![](/images/tutorials/privateNet/neoPythonCli.png)

This is the command line interface that you will be using to compile and deploy your smart contract files.

```
wallet open wallets/privnet.wallet
```

First open up the master wallet by executing the command:

When prompted for a password, type in `o3.network`.

```
wallet rebuild
```
Upon opening the wallet you will need to rebuild the wallet by executing the command:

This will resync the wallet from the genesis block.
