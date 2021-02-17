require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn pull hunt cricket bubble source'; 
let testAccounts = [
"0x9a9030685c7c749761b47f124165627b30bb0b61998d5dee768ba4892ad0e2b0",
"0xfecf2dfda9456e3283cab3b25bd37ae72aadeb5870624272b55158f2c186e2db",
"0xb0facb695b7ac0359f7459fc84478ee4ba05f10bc819a89806650df01e5c0aae",
"0x6c38a3c094519319e1a36215585a57897708796e34634c602a40816e6def66c2",
"0xa49f3b8931313c21b6d9f6c30d5d4a8e0de256732e6602d5cb294dedc9ba8223",
"0x9d581bc1e31d9448dfffd3004da4c84ee617f172e4977c4b46e9463f9d58998e",
"0x2b2ed92501db0c5d8e22c9fb75943f3e416df24219623a08cc23c220cdac8d81",
"0x065e05c15804c5b6b97118fe012dc6012339d85a73c764139ad4293786e0136c",
"0x4de3a3ac644a72b05060c6787beba3eb54ea2bd67866d5738f6cc357d9af9310",
"0xacdf9196da084946d2246a52efe7cd9fd6771d649a7c791abfd0e3aded376e6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
