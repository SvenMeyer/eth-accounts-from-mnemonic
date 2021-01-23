# eth-accounts-from-mnemonic

Ethereum wallets like Metamask create (unlimited) Ethereum addresses and private keys from a 12 word mnemonic.

If you just want to know what the account addresses and private keys are, or you want to import one account into an existing Metamask wallet (defined by a mnemonic), then this program helps.

## Usage

install node : https://nodejs.org/en/download/
```
$ git clone https://github.com/SvenMeyer/eth-accounts-from-mnemonic
$ cd eth-accounts-from-mnemonic
$ npm install
$ node eth-accounts-from-mnemonic.js 'your twelve word mnemonic goes here your twelve word mnemonic goes here'
```

## Example

**WARNING : Never use this mnemonic for a real wallet - only for development & testing !!**

```
$ node eth-accounts-from-mnemonic.js 'myth slice august trophy letter display elephant accuse absorb enjoy hawk course'

0 0xc216776c1384172dbb1191d1fe3b0d98ab03c3aa ca7515ab688b7ea44630917cebfbe648c4fb7bc725a0e12a9e95e931714f065b
1 0x667eac04cff17047cdcc621007bb1156bc3c2151 ba044ed83f19b3251aa1ffc9d1a8f480ee95329b41aa08fa5ad04f4edadaa9da
2 0x7956765be744f64eba4da0b47b43efbd00c5f160 5e99758e0129086a3ad55fae6bb2bb13a8b4facd82212c9f506d4870345105f7
3 0xc251f046098c543961037fd4d330423b47608687 34864601da964d492a4206797140ab8297688502ba800b038abd5ef79a57f9e6
4 0x06329cdb50879f190639d453f1bd113237b975a5 1349361e217af25a5ef038c382ec59f209dae31f7cba3b4fad0c94e2f81f04e1
5 0x52e314ac75ae8fa9cfa66fd08fa44b4f0a3b6cc7 92359404f8825d1532d2887f381cd783df36de1880502f3744c63faf3ce106ce
6 0xb93305b47ab8d5250bd35df185036132f293a069 d039840b1410fc34de87d82d1db50f998edd044fb5b69c0a8163b76289a74883
7 0xcd3889cac26132164faa00f7f550d88a50acb19d 6a853e2f6b33badd70645db52540206720077c651bd5212c8dad68b776dbb8d9
8 0x8cc13827879790d3df13e6ea52d838cfffce4f7a bd207da389208597e519972dac5ddcb2eb53ccb74c976e64ff98088b0748be48
9 0xb8e84423ed0f20b2ae5339a225ca03492e731f88 18b96218405fdfd444aba7da9acc5193ab08b91d994ad8cfb09ecd9321e30582

```



# Alternative solution

https://openbase.com/js/hdwallet-accounts/documentation

```
$ npm install hdwallet-accounts
```

## General Usage

You can use this package in any Javascript app where Ethereum account generation is required. If you are using Truffle and Ganache, then this package is useful in test scripts because the commonly used HDWalletProvider will only return one account (the first, unless you override it in truffle.js).

```
let HDWalletAccounts = require("hdwallet-accounts");

// 12 word mnemonic
let mnemonic = "myth slice august trophy letter display elephant accuse absorb enjoy hawk course";

// Generate 10 accounts using the mnemonic
let walletAccounts = HDWalletAccounts(10, mnemonic);

// Or, alternatively skip the mnemonic and have one auto-created
let walletAccounts = HDWalletAccounts(10);
console.log('Mnemonic:', walletAccounts.mnemonic);
console.log('Account-00 Address:', walletAccounts.accounts[0].address);
console.log('Account-00 Private Key:', walletAccounts.accounts[0].privateKey);
console.log('Account-00 Public Key:', walletAccounts.accounts[0].publicKey);
```
