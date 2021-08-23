// server.js - Makes the Kintone API calls

// Express Server Setup
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const PORT = 5000;
const app = express();

// Installing dotenv to hide sensitive info
require('dotenv').config();

// Getting the Kintone Credentials from a .env file
const subdomain = process.env.SUBDOMAIN;
const appID = process.env.APPID;
const apiToken = process.env.APITOKEN;

// Parse incoming requests with JSON payloads
app.use(express.json());

// Set Cross-Origin Resource Sharing (CORS) to frontend React App
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000'
};

// Append a Query Parameters to the Request Endpoint
const parameters = 'query=order by recordID asc';

// Kintone's Record(s) Endpoints
const multipleRecordsEndpoint = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appID}&${parameters}`
const singleRecordEndpoint = `https://${subdomain}.kintone.com/k/v1/record.json?app=${appID}&${parameters}`;

// This runs if a GET request calls for localhost:5000/getData
app.get('/getData', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      'X-Cybozu-API-Token': apiToken
    }
  }
  const response = await fetch(multipleRecordsEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

// Add the POST request call in the section below
// - - - - - - - - - - - - - - - - - -

// This runs if a POST request calls for localhost:5000/postData

app.post('/postData', cors(corsOptions), async (req, res) => {
  const requestBody = {
    'app': appID,
    'record': {
      'title': {
        'value': req.body.title
      },
      'author': {
        'value': req.body.author
      }
    }
  };
  const options = {
    method: 'POST',
    headers: {
      'X-Cybozu-API-Token': apiToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  }
  const response = await fetch(singleRecordEndpoint, options);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

// - - - - - - - - - - - - - - - - - -
// Add a New Route for a POST request using singleRecordEndpoint

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});