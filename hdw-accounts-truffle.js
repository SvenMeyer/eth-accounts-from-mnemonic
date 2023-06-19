// usage :
// $ node hdw-accounts-truffle-web3.js 'seed words ....'

// https://github.com/trufflesuite/truffle/tree/develop/packages/hdwallet-provider
// https://github.com/ethereum/web3.js

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require("web3"); // TODO : which Web3 version ? 

const hardhatMnemonic = 'test test test test test test test test test test test junk';

const optionDefinitions = [
	{ name: 'args', type: String, multiple: true, defaultOption: true }, // not used
	{ name: 'mnemonic', alias: 'm', type: String, defaultValue: hardhatMnemonic },
	{ name: 'number', alias: 'n', type: Number, defaultValue: 3 },
	{ name: 'keys', alias: 'k', type: Boolean, defaultValue: false },
	{ name: 'delimiter', alias: 'd', type: String, defaultValue: ' ' }
]

const commandLineArgs = require('command-line-args')
const options = commandLineArgs(optionDefinitions)
if (options.number < 1) { options.number = 1 };

console.log({ options });

const provider = new HDWalletProvider({
	mnemonic: options.mnemonic,
	providerOrUrl: "http://localhost:8545",
	numberOfAddresses: options.number,
	// shareNonce: true,
	// derivationPath: "m/44'/60'/0'/0/",
});

// console.log("provider.addresses =", provider.addresses);

// HDWalletProvider is compatible with Web3. Use it at Web3 constructor, just like any other Web3 Provider
// const web3 = new Web3(provider); // TODO : which Web3 version ? 
// console.log("web3.eth.accounts.wallet =", web3.eth.accounts.wallet);

const keys = Object.keys(provider.wallets);
const digits = Math.floor(Math.log10(options.number - 1)) + 1;

// console.log("digits :", digits);

for (var i = 0; i < keys.length; i++) {
	let output = String(i).padStart(digits) + options.delimiter + keys[i];
	if (options.keys) {
		output += options.delimiter + provider.wallets[keys[i]].privateKey.toString('hex');
	}
	console.log(output);
}

// At termination, `provider.engine.stop()' should be called to finish the process elegantly.
provider.engine.stop();
process.exit(0);