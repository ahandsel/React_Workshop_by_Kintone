// recordsList.js - Create a list based on the Kintone records

export default function RecordsList(props) {

  return (
    <div>
      <h1>React App</h1>
      <ul>{props.list}</ul>
    </div>
  );
};