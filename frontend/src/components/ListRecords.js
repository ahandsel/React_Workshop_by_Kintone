// ListRecords.js - List component - Create a list from the Kintone records list array

// Accepts a “props” (i.e. properties) object passed from parent component
// Returns a React element

export default function ListRecords(props) {

  return (
    <div>
      <h1>React App</h1>
      <ul>{props.list}</ul>
    </div>
  );
};