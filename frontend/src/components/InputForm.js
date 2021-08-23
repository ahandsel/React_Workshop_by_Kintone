// InputForm.js - Create a form that makes a POST request

// Get started by importing the React JavaScript library & Hook
import React, { useState } from 'react';

import getRecords from '../requests/getRecords.js';
import postKintoneRecord from '../requests/postKintoneRecord.js';

function InputForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function buttonClick(title, author) {
    postKintoneRecord(title, author)
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
};
export default InputForm;