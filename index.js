// Import stylesheets
import './style.css';
import './easyBank/easyBankComponent.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<easy-bank></easy-bank>`;

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<easy-bank></easy-bank>');
//   res.end();
// }).listen(8080);