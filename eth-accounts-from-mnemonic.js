// usage :
// npm install
// npm install @truffle/hdwallet-provider --save
//
// node eth-accounts-from-mnemonic.js 'tomorrow draft giggle ....'

const HDWalletProvider = require('@truffle/hdwallet-provider');

const args = process.argv.slice(2)

const mnemonic = args[0];

const amount = (args[1] === undefined ? 10 : args[1]);

const wallet = new HDWalletProvider(mnemonic, "http://localhost:8545", 0, amount);

const keys = Object.keys(wallet.wallets);

for (var i=0; i < keys.length; i++) {
	console.log(i, keys[i], wallet.wallets[keys[i]].privateKey.toString('hex'));
}

process.exit(0);
