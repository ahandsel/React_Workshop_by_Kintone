// getRecords.js - Fetches records, transforms response, and returns array

// Declare the GET endpoint defined in our Express server
const getRecordsEndpoint = 'http://localhost:5000/getData';

export default async function getRecords() {
  const response = await fetch(getRecordsEndpoint);
  const jsonResponse = await response.json();

  console.log(jsonResponse);


  let uniqueKey, title, author;

  // Map (1->1 transform) an array of records from the formatted API response to an array of list items
  const ListItemArray = jsonResponse.records.map(
    record => {
      // Unique keys help React identify which items have changed, are added, or are removed.
      // Keys should be given to the elements inside the array to give the elements a stable identity.
      uniqueKey = record.recordID.value;
      title = record.title.value;
      author = record.author.value;

      return <li key={uniqueKey}><b>{title}</b> written by {author}</li>
    }
  )

  return ListItemArray;
};