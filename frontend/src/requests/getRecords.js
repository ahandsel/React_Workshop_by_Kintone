// getRecords.js - Create a list array

// Create an array of lists by looping through Kintone's responded array

// record.title.value = value of the Title field
// record.author.value = value of the author field

// When creating a list in React, assign an unique ID to each item
// Use record.recordID.value for the items' key

// Declare the GET endpoint defined in our Express server
const getRecordsEndpoint = 'http://localhost:5000/getData';

export default async function getRecords() {
  const response = await fetch(getRecordsEndpoint);
  const jsonResponse = await response.json();

  console.log(jsonResponse);

  const arrayOfLists = jsonResponse.records.map(
    record =>
      <li key={record.recordID.value}><b>{record.title.value}</b> written by {record.author.value}</li>
  )

  return arrayOfLists;
};