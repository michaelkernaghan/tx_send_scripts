const { Alchemy, Network, Wallet, Utils } = require("alchemy-sdk");
const dotenv = require("dotenv");
const { Contract } = require('@ethersproject/contracts');
const { getDefaultProvider } = require('@ethersproject/providers');
const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI contract address on Ethereum mainnet
const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'; // USDC contract address on Ethereum mainnet
const uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // Mainnet 

//https://docs.uniswap.org/contracts/v3/reference/deployments

//const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" // Ethereum mainnet
//const uniswapRouterAddress = "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008"; // Sepolia 
//const uniswapRouterABI = [...]; // The ABI for Uniswap's Router
// UniswapV2Router02 contract in 0xB26B2De65D07eBB5E54C7F6282424D3be670E1f0 Sepolia

dotenv.config();
const { API_KEY, YOUR_PRIVATE_KEY } = process.env;

const settings = {
  apiKey: API_KEY,
  network: Network.ETH_SEPOLIA, // Change to appropriate test network if needed
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(YOUR_PRIVATE_KEY, getDefaultProvider(settings.network));
const uniswapRouterContract = new Contract(uniswapRouterAddress, uniswapRouterABI, wallet);

async function main() {
  const amountOutMin = '1'; // The minimum amount of tokens you'd accept in return 
  const path = [daiAddress, usdcAddress];
  const to = wallet.address; // The address to receive the output tokens
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // Transaction deadline (20 minutes from now)

  const data = uniswapRouterContract.interface.encodeFunctionData('swapExactETHForTokens', [
    amountOutMin,
    path,
    to,
    deadline,
  ]);

  const tx = {
    to: uniswapRouterAddress,
    value: Utils.parseEther("0.1"), // Amount of ETH to swap
    data: data,
    gasLimit: "21000",
    maxPriorityFeePerGas: Utils.parseUnits("5", "gwei"),
    maxFeePerGas: Utils.parseUnits("20", "gwei"),
    // Other fields as necessary
  };

  const signedTx = await wallet.signTransaction(tx);
  const txReceipt = await alchemy.core.sendTransaction(signedTx);
  console.log("Transaction Receipt:", txReceipt);
}

main();
