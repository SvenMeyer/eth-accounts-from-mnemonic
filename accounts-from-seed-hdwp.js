// usage :
// npm install
// npm install @truffle/hdwallet-provider
//
// node accounts-from-seed-hdwp.js 'tomorrow draft giggle ....'

// https://github.com/trufflesuite/truffle/tree/develop/packages/hdwallet-provider
// https://github.com/ethereum/web3.js

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require("web3");

const args = process.argv.slice(2)

const mnemonic = (args[0] === undefined ? "" : args[0]); // ((args[0] === undefined) || (args[0] == "")) ? 10 : args[0];

const n = (args[1] === undefined ? 10 : args[1]);

// const provider = new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, amount);

const provider = new HDWalletProvider({
  mnemonic: mnemonic,
  providerOrUrl: "http://localhost:8545",
  numberOfAddresses: n,
  // shareNonce: true,
  // derivationPath: "m/44'/60'/0'/0/",
});

console.log({provider});
// console.log("provider.wallets =", provider.wallets);

// HDWalletProvider is compatible with Web3. Use it at Web3 constructor, just like any other Web3 Provider
const web3 = new Web3(provider);

console.log("web3.eth.accounts.wallet =", web3.eth.accounts.wallet);

const keys = Object.keys(provider.wallets);

for (var i=0; i < keys.length; i++) {
	console.log(i, keys[i], provider.wallets[keys[i]].privateKey.toString('hex'));
}

// At termination, `provider.engine.stop()' should be called to finish the process elegantly.
provider.engine.stop();
