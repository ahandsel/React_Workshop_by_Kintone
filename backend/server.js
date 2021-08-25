// backend - server.js - Routes API requests from the frontend to Kintone

// Express Server Setup
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const PORT = 5000;
const app = express();

// Require dotenv to hide sensitive info in a .env file
require('dotenv').config();

// Get Kintone credentials from a .env file
const subdomain = process.env.SUBDOMAIN;
const appID = process.env.APPID;
const apiToken = process.env.APITOKEN;

// Parse incoming requests with JSON payloads
app.use(express.json());

// Set Cross-Origin Resource Sharing (CORS) to frontend React app
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000'
};

// Append a query parameter to the request endpoint
// This query orders records by their recordID in ascending order
const parameters = 'query=order by recordID asc';

// Kintone's record(s) endpoints
const multipleRecordsEndpoint = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appID}&${parameters}`
const singleRecordEndpoint = `https://${subdomain}.kintone.com/k/v1/record.json?app=${appID}&${parameters}`;

// This route executes when a GET request lands on localhost:5000/getData
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

/* Add the POST request in the section below */
// - - - - - - - START - - - - - - - -

// - - - - - - - END - - - - - - - - -


/* Add a new route for the POST request using singleRecordEndpoint */
// - - - - - - - START - - - - - - - -

// - - - - - - - END - - - - - - - - -

app.listen(PORT, () => {
  console.log(`Backend server listening at http://localhost:${PORT}`);
});