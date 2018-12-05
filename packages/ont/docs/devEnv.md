# Getting started
This is a walkthrough of how to get setup in order to start creating, deploying, and interacting with smart contracts on the Ontology Blockchain.

We will be using 3 separate tools during development:

##### Solo Chain
A self contained Ontology private network. No additional dependencies required.

##### O3
dAPI wallet provider which supports the Ontology interface

##### SmartX
Write and compile smart contract code. Available as an O3 dapp.

## Installation
Download and install the latest version of the latest versions of the Solo Chain and O3 apps.

[Solo Chain Installer](https://github.com/punicasuite/solo-chain/releases)

[O3 Desktop Installer](https://o3.network/)
Be sure to install the desktop version of the O3 application for development. Mobile support coming soon.

## Solo Chain setup

Open the Solo Chain app, and click start if not already started.

![soloStart](./assets/soloStart.png)

Claim your ONG for the master account.

![soloONG](./assets/soloOng.png)

Get the private key of the master account by clicking on the key, and copying the value.

![soloPk](./assets/soloPk.png)

Note that this account is for the private network only. Please do not use this account for any main net transaction, or ever share or display your real private key with anyone but yourself.

![soloPk2](./assets/soloPk2.png)


## O3 Setup

Open up the O3 app, and click the "Import existing wallet" button.

![o3import](./assets/o3Import.png)

Paste the Solo Chain master account private key into the provided field.

![o3import2](./assets/o3Import2.png)

Give the account a name, and a password to login to this account in the future.

![o3import3](./assets/o3Import3.png)

You should now be logged into the Solo Chain master account in O3. Please navigate to the apps screen by clicking on the apps icon in the toolbar on the left hand side.

![o3apps](./assets/o3Apps.png)

Once on the apps screen, click on the title "Apps" rapidly 10 times to put the O3 app into developer mode.

![o3apptitle](./assets/o3AppTitle.png)

You should notice that in dev mode you will now have access to the "Dev Settings" menu on the top right, and the addition of several developer apps to the app list.

![o3devmode](./assets/o3DevMode.png)

In the "Dev Settings" menu, you can set the location of your private Ontology network. By default, it should already be set up to work with your Solo Chain private network.

![o3devset](./assets/o3DevSet.png)

## Creating your Smart

Open up the SmartX app from the list in the O3 application. Please be sure to open from within the O3 app, and NOT directly from your browser. The version provided in the O3 app list is customized to streamline your development experience using the O3 and Solo Chain apps.

![o3smartx](./assets/o3Smartx.png)

Upon opening the app, you will be presented with the default hello world contract. Click on the "File" button on the top left to open up the menu, where you can open a contract file on your local machine, save the current smart contract to your local machine, or load a template, such as OEP4. For this example, go ahead and load up the OEP4 template.

![smartxfile](./assets/smartxfile.png)

Once loaded, you can review the code in the IDE, and make changes to properties such as the token name or supply. Once you are satisfied, click on "Compile" on the right hand side to compile the contract to into the format required for deployment.

![smartxoep4](./assets/smartxoep4.png)

Once compiled, you should see your compiled contract code on the right hand side. To proceed to deployment, click on either the "Deploy" tab on the top, or the "Next" button on the bottom.

![smartxcompiled](./assets/smartxcompiled.png)

Fill in some information about your contract, and click "Deploy".

![smartxdeploy](./assets/smartxdeploy.png)

The O3 app will be brought to the foreground, and will prompt you to authorize the deployment transaction. First select your Solo Chain master account, and accept the connection from the SmartX dapp.

![smartxconnect](./assets/smartxconnect.png)

You can then review the transaction confirmation dialog for the deployment transaction you are about to sign. Click on "Show transaction details" to review the details of the transaction.

![smartxtxconfirm](./assets/smartxtxconfirm.png)

Here, you want to ensure that the transaction is being sent to the correct network (PrivateNet in this case), and all the deployment information. Once ready, click the "Approve" button to sign and broadcast the transaction.

![smartxtxconfirm2](./assets/smartxtxconfirm2.png)
