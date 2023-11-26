const axios = require('axios'); // Import axios library
const Web3 = require('web3');
const web3 = new Web3.default('https://eth-sepolia.g.alchemy.com/v2'); // Instantiate a Web3 instance with a provider

// Set up addresses
const addresses = [
  '0x60eccF952133a4997786ef29bD2F39804D6ce230', 
  '0x7DC86C4d5Ba32e4521Ead252A219ee77F9eB61d7', 
  '0x08C604F4078B8a2915d59E8D3B21d19bb48244c4'
];

// Set up headers object for the request
const headers = {
  'Authorization': `Bearer 9CrxPEue8Lcj3VbrffPONrO3S0KpE7vX`, // Insert API key in Authorization header
};

addresses.forEach(address => {
  // Set up data object for the request
  const data = {
    method: 'eth_getBalance', // Set request method
    params: [address], // Insert the EVM address
    id: 1,
    jsonrpc: "2.0"
  }

  // Send POST request using axios to base request URL ( you can get the base request url from your Alchemy dashboard )
  axios.post('https://eth-sepolia.g.alchemy.com/v2', data, { headers: headers })
    .then(response => {
      const balanceWei = response.data.result; // Balance in Wei
       const balanceEther = web3.utils.fromWei(balanceWei, 'ether'); // Convert balance to Ether
      console.log(`Balance of ${address}: ${balanceEther} ETH`); // Log balance in Ether
    })
    .catch(error => console.error(error)); // Log any errors
});