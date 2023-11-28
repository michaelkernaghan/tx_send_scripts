# Sepolia Ethereum Test Scripts

Welcome to the Sepolia Ethereum Test Scripts repository. This collection offers a variety of JavaScript scripts for diverse operations on the Sepolia Ethereum testnet, including transactions, balance checks, block history exploration, and contract interactions.

## Directory Structure and Key Scripts

Here's an overview of the repository:

- `.env`: Environment variables like API keys and private keys.
- `send_all.js`, `send_a_to_[a-e].js`, `send_b_to_[a-e].js`, `send_c_to_[a-e].js`, `send_d_to_e.js`: Scripts for sending transactions between specified addresses.
- `send_nine_txs.sh`: Executes nine transactions in sequence.
- `send_b_to_e_responses` : prints out all responses from server during the transaction.
- `send_no_maxes.js`: Sends a transaction without max priority and max fee. Note that ethers throws an error for this.
- `tx-history-from-axios.js`: Fetches transaction history using Axios.
- `send_b_to_uniswap_contract.js`: Interacts with the Uniswap contract on Sepolia for ERC-20 token swapping.
- `send_batch_transactions.js`: This script automates the process of sending transactions in a batch between multiple parties. It cycles through a list of predefined parties (like Alice, Bob, and Carol) and sends transactions from each one to all the others. This script is particularly useful for testing transaction flows in a more comprehensive and automated manner.

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

Run any script using Node.js. For batch transaction sending:

```bash
node send_batch_transactions.js
```

This command runs the script to send multiple transactions between predefined parties on the Sepolia testnet.

## Contributing

Feel free to contribute to the improvement or extension of these scripts. Adhere to standard pull request protocols when contributing.

## Disclaimer

These scripts are for Sepolia Ethereum testnet use only. They are not intended for real Ether transactions or use on the Ethereum mainnet.

## License

This project is under the MIT License - see the [LICENSE](LICENSE) file for details.