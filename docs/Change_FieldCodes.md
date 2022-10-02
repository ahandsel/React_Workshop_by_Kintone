# Want to change the field codes of the Kintone Web Database App?

Here is a guide on how to modify this codebase to use your own field codes.

## Outline <!-- omit in toc -->
* [Sections of the codebase that needs to be updated](#sections-of-the-codebase-that-needs-to-be-updated)
  * [Kintone App](#kintone-app)
  * [Backend](#backend)
  * [Frontend](#frontend)
    * [`getRecords.js`'s `ListItemArray` object](#getrecordsjss-listitemarray-object)
    * [`postRecords.js`'s `recordBodyParameters` object](#postrecordsjss-recordbodyparameters-object)
* [Example](#example)
  * [Kintone App](#kintone-app-1)
    * [Changing Field Types](#changing-field-types)
  * [Backend](#backend-1)
  * [Frontend](#frontend-1)
    * [`getRecords.js`'s `ListItemArray` object](#getrecordsjss-listitemarray-object-1)
    * [`postRecords.js`'s `recordBodyParameters` object](#postrecordsjss-recordbodyparameters-object-1)

## Sections of the codebase that needs to be updated

Here are all the lines of code you need to change in order for this Kintone x React App setup to work when you change the field codes:

### Kintone App
Here are the initial fields & their configurations for the Kintone Web Database App:

| Field Type | Field Name | Field Code |
| ---------- | ---------- | ---------- |
| Text       | Title      | `title`    |
| Text       | Author     | `author`   |

You can always change the field name without any issues. No need to update the code.

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

### Kintone App
Here would be the updated fields & their configurations for the Kintone Web Database App:

| Field Type | Field Name | Field Code |
| ---------- | ---------- | ---------- |
| Text       | City       | `city`     |
| Text       | Country    | `country`  |

You can always change the field name without any issues. No need to update the code.

#### Changing Field Types
⚠️ If you change the field type as well, additional changes to the codebase may be required!

Review the [Get Record > Sample Response](https://kintone.dev/en/docs/kintone/rest-api/records/get-record/#sample-response) API Doc to see the expected output of the Get Record API for the desired field type.

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
