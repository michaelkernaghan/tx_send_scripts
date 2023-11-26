const { Alchemy, Network, Wallet, Utils } = require("alchemy-sdk");
const dotenv = require("dotenv");

dotenv.config();
const { API_KEY, ALICE_PRIVATE_KEY, BOB_PRIVATE_KEY, CAROL_PRIVATE_KEY } = process.env;

const settings = {
  apiKey: API_KEY,
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(settings);


const parties = [
  {
    address: "0x60eccF952133a4997786ef29bD2F39804D6ce230", // Alice
    privateKey: ALICE_PRIVATE_KEY,
  },
  {
    address: "0x7DC86C4d5Ba32e4521Ead252A219ee77F9eB61d7", // Bob
    privateKey: BOB_PRIVATE_KEY,
  },
  {
    address: "0x08C604F4078B8a2915d59E8D3B21d19bb48244c4", // Carol
    privateKey: CAROL_PRIVATE_KEY,
  }
];

async function main() {
  for (let i = 0; i < parties.length; i++) {
    let senderWallet = new Wallet(parties[i].privateKey);
    const nonceStart = await alchemy.core.getTransactionCount(
      parties[i].address,
      "latest"
    );

    for (let j = 0; j < parties.length; j++) {
      if (i !== j) {
        let transaction = {
          to: parties[j].address,
          value: Utils.parseEther("0.001"),
          gasLimit: "21000",
          maxPriorityFeePerGas: Utils.parseUnits("5", "gwei"),
          maxFeePerGas: Utils.parseUnits("20", "gwei"),
          nonce: nonceStart + j,
          type: 2,
          chainId: 11155111,
        };

        let rawTransaction = await senderWallet.signTransaction(transaction);
        let tx = await alchemy.core.sendTransaction(rawTransaction);
        console.log(`Sent transaction from ${parties[i].address} to ${parties[j].address}`, tx);
      }
    }
  }
}

main().catch(console.error);