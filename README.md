# Sepolia Ethereum Test Scripts

Welcome to the Sepolia Ethereum Test Scripts repository, a resourceful collection of JavaScript scripts tailored for various operations on the Sepolia Ethereum testnet. These scripts are invaluable for developers aiming to perform test transactions, check balances, explore block histories, and interact with Ethereum contracts in a testing environment.

## Directory Structure

Below is an overview of the key files and their functions in this repository:

- `.env`: Contains environment variables such as API keys and private keys.
- `get-ETH-balances-of-interest.js`: Script to check ETH balances of specified addresses.
- `send_all.js`: Script to send multiple transactions in a sequence.
- `send_a_to_[a-e].js`: Scripts for sending transactions from address A to addresses A through E.
- `send_b_to_[a-e].js` and `send_b_to_[a-e]_*.js`: Scripts for sending transactions from address B to various addresses with different configurations.
- `send_c_to_[a-e].js`: Scripts for sending transactions from address C to addresses A through E.
- `send_d_to_e.js`: Script for sending a transaction from address D to E.
- `sendFull.js`: A comprehensive script for sending a full-featured transaction.
- `send_nine_txs.sh`: Shell script to execute nine transactions sequentially.
- `send_no_maxes.js`: Script to send a transaction without specifying max priority and max fee.
- `tx-history-from-axios.js`: Utility script to fetch transaction history using Axios.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/sepolia-ethereum-test-scripts.git
cd sepolia-ethereum-test-scripts
npm install
```

## Configuration

Set up your `.env` file with the necessary API and private keys:

```env
API_KEY=your_alchemy_api_key_here
ALICE_PRIVATE_KEY=your_private_key_here
YOUR_PRIVATE_KEY=your_other_private_key_here
```

## Usage

Execute any of the provided scripts with Node.js. For instance:

```bash
node send_a_to_b.js
```

This command will run the script to send a transaction from address A to address B on the Sepolia testnet.

## Contributing

Your contributions to improve or extend the functionality of these scripts are welcome. Please adhere to standard pull request protocols.

## Disclaimer

These scripts are intended for use on the Sepolia Ethereum testnet for testing purposes only. Do not use them with real Ether or on the Ethereum mainnet.

## License

This project is under the MIT License - see the [LICENSE](LICENSE) file for details.
