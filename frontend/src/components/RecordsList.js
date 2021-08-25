// RecordsList.js - React component that renders a list

/* Accepts a “props” (i.e. properties) object passed from parent component
// Returns a React element
*/

export default function RecordsList(props) {

  return (
    <div>
      <h1>React App</h1>
      <ul>{props.list}</ul>
    </div>
  );
};