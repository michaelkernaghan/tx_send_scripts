const axios = require('axios');

let data = JSON.stringify({
  "jsonrpc": "2.0",
  "id": 0,
  "method": "alchemy_getAssetTransfers",
  "params": [
    {
      "fromBlock": "0x0",
      "fromAddress": "0x60eccF952133a4997786ef29bD2F39804D6ce230",
      "category": ["external", "internal"]
    }
  ]
});

var requestOptions = {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  data: data,
};

const apiKey = "demo"
const baseURL = `https://eth-sepolia.g.alchemy.com/v2/9CrxPEue8Lcj3VbrffPONrO3S0KpE7vX`;
const axiosURL = `${baseURL}`;

axios(axiosURL, requestOptions)
  .then(response => console.log(JSON.stringify(response.data, null, 2)))
  .catch(error => console.log(error));

