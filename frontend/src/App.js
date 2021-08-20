// App.js - Parent React Component

import { useState, useEffect } from 'react';

import RecordsList from './components/recordsList.js'
import RecordInput from './components/recordInput.js'

import getKintoneRecords from './requests/getKintoneRecords';

function App() {

  const [listItems, setListItems] = useState('*** now loading ***');

  useEffect(() => {
    getKintoneRecords().then(
      result => setListItems(result)
    );
  }, []);

  return (
    <div>
      <RecordsList list={listItems} />
      <RecordInput setListItems={setListItems} /> {/* Append */}
    </div>
  );
}

export default App;
