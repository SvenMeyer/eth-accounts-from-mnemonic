# eth-accounts-from-mnemonic

Ethereum wallets like Metamask create (unlimited) Ethereum addresses and private keys from a 12 word mnemonic.

If you just want to know what the account addresses and private keys are, or you want to import one account into an existing Metamask wallet (defined by a mnemonic), then this program helps.

## Usage

**WARNING : Never use this mnemonic for a real wallet - only for development & testing !!**

```
$ node hdw-accounts-truffle.js -k -n 3 -m 'myth slice august trophy letter display elephant accuse absorb enjoy hawk course'

{
  options: {
    mnemonic: 'myth slice august trophy letter display elephant accuse absorb enjoy hawk course',
    number: 3,
    keys: true
  }
}
0 0xc216776c1384172dbb1191d1fe3b0d98ab03c3aa ca7515ab688b7ea44630917cebfbe648c4fb7bc725a0e12a9e95e931714f065b
1 0x667eac04cff17047cdcc621007bb1156bc3c2151 ba044ed83f19b3251aa1ffc9d1a8f480ee95329b41aa08fa5ad04f4edadaa9da
2 0x7956765be744f64eba4da0b47b43efbd00c5f160 5e99758e0129086a3ad55fae6bb2bb13a8b4facd82212c9f506d4870345105f7


```

# Alternative solution

https://github.com/techbubble/hdwallet-accounts


