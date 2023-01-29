// usage :
// npm install
// npm install @truffle/hdwallet-provider --save
//
// node eth-accounts-from-mnemonic.js 'tomorrow draft giggle ....'

const HDWalletProvider = require('@truffle/hdwallet-provider');

const args = process.argv.slice(2)

const mnemonic = (args[0] === undefined ? "" : args[0]); // ((args[0] === undefined) || (args[0] == "")) ? 10 : args[0];

const amount = (args[1] === undefined ? 10 : args[1]);

const provider = new HDWalletProvider(mnemonic, "http://localhost:8545", 0, amount);

const keys = Object.keys(provider.wallets);

for (var i=0; i < keys.length; i++) {
	console.log(keys[i]);
}

// At termination, `provider.engine.stop()' should be called to finish the process elegantly.
provider.engine.stop();

process.exit(0);
