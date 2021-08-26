// InputForm.js - Form component - Create a form that submits a POST request

// Import required files
import React, { useState } from 'react';

import getRecords from '../requests/getRecords.js';
import postRecord from '../requests/postRecord.js';

function InputForm(props) {

  /* Create the component that submits a POST request */
  // - - - - - - - START - - - - - - - -

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function buttonClick(title, author) {
    postRecord(title, author)
      .then(() => getRecords())
      .then(result => props.setListItems(result))
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <button type="button" onClick={() => buttonClick(title, author)}>Post to Kintone</button>
      </form>
    </div>
  );

  // - - - - - - - END - - - - - - - - -
};
export default InputForm;