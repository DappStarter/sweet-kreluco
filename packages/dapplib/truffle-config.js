require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict robot flock tribe stove rice noble modify gloom kangaroo army gift'; 
let testAccounts = [
"0xc7be1625e437c23e2fd67ae1cddf06088f451360d75a8e6bf21a81bfa52480dc",
"0x2fc9c3976b78ad70329bed751bb319c195f4491ba5f377320b62a209b5b01f8d",
"0x2ec0fc117197312330f9b0114d8d9d0e627f10c6766dc01907453dd375737263",
"0x518ff49604d1dadf8f2882d0babeda7503766c8c5b29b29330055c269fc5036b",
"0xdf02829435c8088b87c6613022aecd1d4453173c29de16b171ff958e6d66116c",
"0xb6236e13906fd6730e94c9a37c99134f67a01cae9e9460f3db65931681d68b49",
"0x6678bdc4e5388282645c564fd75070ca2aefe40709c11b5d637b5a5e580fd8a6",
"0xd61810fdf3f8baa66bd6f923a79817f6132edd66b6ed62bbf4975b0053074554",
"0x29607ad319e316900d6fbed4525302025f7a71aa242a3f297b19bd2fb0362ac2",
"0x9f0850994657674911116e7c5aa9edb245d002f026c0e62e7b3875ebc152a977"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

