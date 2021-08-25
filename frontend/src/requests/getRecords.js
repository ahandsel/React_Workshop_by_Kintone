// getRecords.js - Fetches Kintone records, transforms response, & returns an array of list item

/**
 * Notes on Kintone responses:
 * record.title.value = value of the Title field
 * record.author.value = value of the Author field
 * record.recordID.value = value of the Record number field (unique key for the record)
 */

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