// postRecord.js - POST the input to the Kintone Database App

// Declare the POST endpoints defined in our Express server
const addRecordEndpoint = 'http://localhost:5000/postData';

// Make REST API Calls & take in the values stored in the state variables related to the input fields
export default async function postRecord(title, author) {
  const recordBodyParameters = {
    'title': title,
    author // ES6 syntax that functions the same as above
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recordBodyParameters)
  }

  const response = await fetch(addRecordEndpoint, options);
  const jsonResponse = await response.json();

  console.log(JSON.stringify(jsonResponse));

  return jsonResponse;
};