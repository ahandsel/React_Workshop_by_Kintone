// ListRecords.js - Create a list based on the Kintone records

// This is a "function component”
// It accepts an“props” (i.e., properties) object argument with data
// It returns a React element

export default function ListRecords(props) {

  return (
    <div>
      <h1>React App</h1>
      <ul>{props.list}</ul>
    </div>
  );
};