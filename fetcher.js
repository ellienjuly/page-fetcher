const request = require('request');
const fs = require('fs');

let url = 'http://www.example.edu/';
const file = './Data.html';

const fetcher = () => {
  console.log(`node fetcher.js ${url}`);
  request(url, (error, response, body) => {
    if (response.statusCode >= 400) {
      console.log (`Error: ${response && response.statusCode}`);
      return;
    }
    download(file, body, error)
  });
  
}

const download = (file, body, error) => {
  fs.writeFile(file, body, err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`Download and saved ${body.length} bytes to ./DATA.html`);
};

fetcher();