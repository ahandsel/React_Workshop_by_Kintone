// ListRecords.js - List component - Create a list from the Kintone records list array

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