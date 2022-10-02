# Want to change the field codes of the Kintone Web Database App?

Here is a guide on how to modify this codebase to use your own field codes.

## Outline <!-- omit in toc -->
* [Sections of the codebase that needs to be updated](#sections-of-the-codebase-that-needs-to-be-updated)
  * [Backend](#backend)
  * [Frontend](#frontend)
    * [`getRecords.js`'s `ListItemArray` object](#getrecordsjss-listitemarray-object)
    * [`postRecords.js`'s `recordBodyParameters` object](#postrecordsjss-recordbodyparameters-object)
* [Example](#example)
  * [Backend](#backend-1)
  * [Frontend](#frontend-1)
    * [`getRecords.js`'s `ListItemArray` object](#getrecordsjss-listitemarray-object-1)
    * [`postRecords.js`'s `recordBodyParameters` object](#postrecordsjss-recordbodyparameters-object-1)

## Sections of the codebase that needs to be updated

Here are all the lines of code you need to change in order for this Kintone x React App setup to work when you change the field codes:

### Backend
For the Backend, you need to update [backend/server.js](../backend/server.js)'s `requestBody` object.

  ```javascript
  const requestBody = {
    'app': appID,
    'record': {
      'title': {
        'value': req.body.title
      },
      'author': {
        'value': req.body.author
      }
    }
  };
  ```

### Frontend
For the Frontend, you need to update the following:
* [frontend/src/requests/getRecords.js](../frontend/src/requests/getRecords.js)'s `ListItemArray` object
* [frontend/src/requests/postRecords.js](../frontend/src/requests/postRecord.js)'s `recordBodyParameters` object

#### `getRecords.js`'s `ListItemArray` object

  ```javascript
  const ListItemArray = jsonResponse.records.map(
    record => {
      uniqueKey = record.Record_number.value;
      title = record.title.value;
      author = record.author.value;

      return <li key={uniqueKey}><b>{title}</b> written by {author}</li>
    }
  );
  ```

#### `postRecords.js`'s `recordBodyParameters` object

  ```javascript
  const recordBodyParameters = {
    'title': title,
    author // ES6 syntax that functions the same as above
  }
  ```

## Example

Here is an example of how the codebase would look like if you changed the field codes from `title` and `author` to `city` and `country`.
* `title` would be changed to `city`
* `author` would be changed to `country`

### Backend
Update [backend/server.js](../backend/server.js)'s `requestBody` object like so:

  ```javascript
  const requestBody = {
    'app': appID,
    'record': {
      'city': {
        'value': req.body.city
      },
      'country': {
        'value': req.body.country
      }
    }
  };
  ```

### Frontend

#### `getRecords.js`'s `ListItemArray` object
Update the [frontend/src/requests/getRecords.js](../frontend/src/requests/getRecords.js)'s `ListItemArray` object like so:

  ```javascript
  const ListItemArray = jsonResponse.records.map(
    record => {
      uniqueKey = record.Record_number.value;
      city = record.city.value;
      country = record.country.value;

      return <li key={uniqueKey}>Option {uniqueKey} : {city}, {country}</li>
    }
  );
  ```

#### `postRecords.js`'s `recordBodyParameters` object
* [frontend/src/requests/postRecords.js](../frontend/src/requests/postRecord.js)'s `recordBodyParameters` object

  ```javascript
  const recordBodyParameters = {
    city,
    country
  }
  ```
