const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

const path = require('path');
let secrets;
let projectId;
let mnemonic = '';

if (fs.existsSync('./secrets.json')) {
  secrets = require('./secrets.json');
  mnemonic = secrets.mnemonic;
  projectId = secrets.projectId;
}

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'app/src/contracts'),
  networks: {
    develop: {
      port: 8545,
    },
    mainlocal: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '1',
      skipDryRun: true,
      gas: 6000000,
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${projectId}`),
      network_id: 42,
      gas: 3000000,
      gasPrice: 10000000000,
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${projectId}`),
      network_id: 1,       // Mainnet id
      chain_id: 1,
      gas: 8000000,
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,    // Skip dry run before migrations? (default: false for public nets )
      gasPrice: 7000000000,  // 7 gwei (in wei) (default: 100 gwei)
    },
  },
};
