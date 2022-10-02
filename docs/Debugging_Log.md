# Debugging - Let's Fix Those Problems 💪

Here is a rundown of common problems that may occur & its solutions!  

## Outline <!-- omit in toc -->
* [`npm install` command is not working](#npm-install-command-is-not-working)
* [React not updating after updating `server.js`?](#react-not-updating-after-updating-serverjs)
* [Error from `Terminal 2 - backend`?](#error-from-terminal-2---backend)
* [No response when starting the Express server?](#no-response-when-starting-the-express-server)
* [Got a `UnhandledPromiseRejectionWarning` error?](#got-a-unhandledpromiserejectionwarning-error)
* [Got a `GAIA_IA02` error?](#got-a-gaia_ia02-error)
* [Got a `GAIA_IQ11` `Specified field (Record_number) not found` error?](#got-a-gaia_iq11-specified-field-record_number-not-found-error)

## `npm install` command is not working

1. Verify the Node.js & npm versions **inside** the `React_Workshop_by_Kintone` folder
2. Just installed Node.js? Verify you configured Node.js versions **inside** the `React_Workshop_by_Kintone` folder

* Mac: `nodenv local 14.5.0`
* Windows: `nvm use 14.5.0`

## React not updating after updating `server.js`?

After making changes to `server.js`, be sure to restart the Express server On the `Terminal 2 - backend`!

* Stop the server: `ctrl + c`
* Start the server: `npm start`

Then reload the browser showing the React App: [localhost:3000](http://localhost:3000/)

## Error from `Terminal 2 - backend`?

Do you see an error on `.../React_Workshop_by_Kintone/backend/node_modules/node-fetch/lib/index.js:272` like the following?

```text
return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
                           ^
FetchError: invalid json response body at https://r.kintone.com/notfound/subdomain.html reason: Unexpected token < in JSON at position 0
    at /Users/g001494/Downloads/React_Workshop_by_Kintone/backend/node_modules/node-fetch/lib/index.js:272:32
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async /Users/g001494/Downloads/React_Workshop_by_Kintone/backend/server.js:43:24 {
  type: 'invalid-json'
}
```

This error is related to your Kintone credentials.

1. Verify that you have created a `.env` file with your Kintone credentials inside the `backend` folder
2. Verify the Kintone credentials are correct: Subdomain, App ID, and API Token
3. Verify that the Kintone App is configured as done in the [Create a Kintone Web Database App](Steps.md#step-2-create-a-kintone-web-database-app) section
4. Verify that the Kintone Web Database App is updated after generating the [Kintone API Token](Steps.md#step-2---b-generate-a-kintone-api-token)

## No response when starting the Express server?

1. Make sure you are inside the `backend` folder when starting the Express server.
   * `cd ~/Downloads/React_Workshop_by_Kintone/backend`
   * `npm start`
2. Verify that you have renamed `.env.example` to `.env`
   * Be sure to enter your Subdomain, App ID, and API Token in the `.env` file

## Got a `UnhandledPromiseRejectionWarning` error?

```text
(node:5379) UnhandledPromiseRejectionWarning: FetchError: request to https://.kintone.com/k/v1/records.json?app= failed, reason: getaddrinfo ENOTFOUND .kintone.com
```

* It looks like Kintone API credentials are missing
* Be sure to enter your Subdomain, App ID, and API Token in the `.env` file
* Confused? 🤔 → Check out the [🔐 Securely input your credentials in a `.env` file](steps.md#step-3-create-a-env-file) section

## Got a `GAIA_IA02` error?

* Enter the App's API Token in `.env` file as `APITOKEN = ""`
* Be sure to hit the `save` button & the `Update App` button to implement the API Token change.

## Got a `GAIA_IQ11` `Specified field (Record_number) not found` error?

If you got this error, then your Record Number field's field code is not set to `Record_number`.

Error Message:

```json
{"code":"GAIA_IQ11","id":"vgK7CfZlVME2T65afg8g","message":"Specified field (Record_number) not found."}
```

Fix:
1. Add the Record Number field to the App
1. Set the field code to `Record_number`
1. Save & Update the App
