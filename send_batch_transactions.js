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
    privateKey: "0xe37d4d05de32e6559a3f8645bf65a2f3239fb256869a8e2433db457ccdaf208e",
  },
  {
    address: "0x7DC86C4d5Ba32e4521Ead252A219ee77F9eB61d7", // Bob
    privateKey: "0x4fe089a475d1104e238da2f32901870db9103b9c07e8de9ad7f5699e697d01cf",
  },
  {
    address: "0x08C604F4078B8a2915d59E8D3B21d19bb48244c4", // Carol
    privateKey: "0x355a81b61b6f0116b66426faac25a91b4395b40cdfefb8c33ab6e9e6a7ef17eb",
  }
];

async function main() {
  for (let i = 0; i < parties.length; i++) {
    let senderWallet = new Wallet(parties[i].privateKey);
    let nonce = await alchemy.core.getTransactionCount(
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
          nonce: nonce +i +j,
          type: 2,
          chainId: 11155111,
        };

        let rawTransaction = await senderWallet.signTransaction(transaction);
        let tx = await alchemy.core.sendTransaction(rawTransaction);
        console.log(`Sent transaction from ${parties[i].address} to ${parties[j].address}`, tx);

        // Increment the nonce for the next transaction from this sender
        nonce++;
      }
    }
  }
}

main().catch(console.error);