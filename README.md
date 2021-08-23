# React Workshop by [Kintone](https://developer.kintone.io/hc/en-us/) - Version 3

## Let's POST Data to a Web Database From a React Component <!-- omit in toc -->

Thank you for attending our **Kintone x React** workshop!  

## Outline <!-- omit in toc -->
* [Get Started](#get-started)
* [Kintone Web Database & Credentials](#kintone-web-database--credentials)
  * [🚀 Getting your FREE Kintone Database](#-getting-your-free-kintone-database)
    * [① Sign-Up for Developer Program Account (Website) 🌐](#-sign-up-for-developer-program-account-website-)
    * [② THEN Create a Kintone Subdomain (Database) 📂](#-then-create-a-kintone-subdomain-database-)
    * [Video: Sign up for Kintone Developer Program & Developer License](#video-sign-up-for-kintone-developer-program--developer-license)
  * [Create a Kintone Web Database App](#create-a-kintone-web-database-app)
  * [🔐 Securely input your credentials in a `.env` file](#-securely-input-your-credentials-in-a-env-file)
* [Encountered Problems?](#encountered-problems)
  * [How do I get my Kintone Subdomain?](#how-do-i-get-my-kintone-subdomain)
  * [Install Node & npm](#install-node--npm)
  * [Error from `Terminal 2 - backend`?](#error-from-terminal-2---backend)

## Get Started

First, let's download the [ahandsel/React_Workshop_by_Kintone](https://github.com/ahandsel/React_Workshop_by_Kintone) Repo and go inside the folder.

```bash
cd Downloads

git clone https://github.com/ahandsel/React_Workshop_by_Kintone

cd React_Workshop_by_Kintone
```

```bash
ls

README.md   backend   frontend
```

Inside there should be two folders (`frontend` & `backend`) and a README file.

Open the `React_Workshop_by_Kintone` folder in [VS Code](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_command-line)

```bash
code .
```

Let's open a terminal per folder.  
Then inside the folders, download the required packages with `npm install`.

|                      | Terminal 1 - Frontend                                       | Terminal 2 - Backend                                    |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------- |
| Go inside the folder | `cd ~/Downloads/React_Workshop_by_Kintone/frontend`         | `cd ~/Downloads/React_Workshop_by_Kintone/backend`      |
| Install packages     | `npm install`                                               | `npm install`                                           |
| Run the scripts      | `npm start`                                                 | `npm start`                                             |
| View Results         | [localhost:3000](http://localhost:3000/)                    | [localhost:5000/getData](http://localhost:5000/getData) |
| Expected Results     | React App listing out records from Kintone Web Database App | Raw API response in JSON with all the records           |

## Kintone Web Database & Credentials
*Built for teamwork, designed by you*

### 🚀 Getting your FREE Kintone Database

#### ① Sign-Up for Developer Program Account (Website) 🌐
  * [bit.ly/KDP_signup](https://bit.ly/KDP_signup)
    * ⚠ Do NOT use Safari
    * ⚡Accept Cookies First
    * ✅ Use Chrome & Firefox

#### ② THEN Create a Kintone Subdomain (Database) 📂
  * [bit.ly/K_DevLic](http://bit.ly/K_DevLic)
    * ⚡ Only use lowercase, numbers, & hyphens in your subdomain
    * ⚠ Do not use uppercase nor special characters

Confused? 🤔 → Check out the video below:

#### Video: Sign up for Kintone Developer Program & Developer License

[![https://youtu.be/Gzz8SbTuoFg](https://img.youtube.com/vi/Gzz8SbTuoFg/mq1.jpg)](https://youtu.be/Gzz8SbTuoFg)  
<https://youtu.be/Gzz8SbTuoFg>

### Create a Kintone Web Database App

Let's create a Kintone App to list off your favorite [Manga](https://en.wikipedia.org/wiki/Manga)s!

Here are the required fields & their configurations for our workshop:

| Field Type    | Field Name    | Field Code | Note                             |
| ------------- | ------------- | ---------- | -------------------------------- |
| Text          | Title         | `title`    | The manga's title                |
| Text          | Author        | `author`   | The manga's author               |
| Record number | Record number | `recordID` | Auto generated ID for each entry |

![Create_App_Demo.gif Kintone_React_Workshop v2.1](https://user-images.githubusercontent.com/30670749/125898739-1bc018ac-1740-40e0-91cc-ab829192d2ea.gif)

### 🔐 Securely input your credentials in a `.env` file
In the `backend` folder, create a `.env` file.  
Follow the template below and input your Kintone credentials.

```.env
SUBDOMAIN = ""
APPID = ""
APITOKEN = ""
```

Here is an example `.env` file.

```.env
SUBDOMAIN = "devevents"
APPID = "1"
APITOKEN = "dXNlckBleGFLtcGxlmNvbTpzZWNyZXQe9q3IhtcG"
```

## Encountered Problems?

Here is a rundown of problems & solutions that may occur during our workshop

### How do I get my Kintone Subdomain?
It might be a bit confusing since since you need to sign-up for [Developer Program Account (Website) 🌐](https://bit.ly/KDP_signup) BEFORE creating your [Kintone Subdomain (Database) 📂](http://bit.ly/K_DevLic).

Check out our [Sign up for Kintone Developer Program & Developer License](https://youtu.be/Gzz8SbTuoFg) YouTube video:
  * [![https://youtu.be/Gzz8SbTuoFg](https://img.youtube.com/vi/Gzz8SbTuoFg/mq1.jpg)](https://youtu.be/Gzz8SbTuoFg)

### Install Node & npm
The code in the workshop requires Node ≥ 10.16 and npm ≥ 5.6.

Confused? 🤔 → Check out our [Install Node.JS on macOS & Windows and Create a Sample React App - YouTube](https://www.youtube.com/watch?v=4Kw-i_rX3tY) Video!
  * [![https://youtu.be/4Kw-i_rX3tY](https://img.youtube.com/vi/4Kw-i_rX3tY/mq1.jpg)](https://youtu.be/4Kw-i_rX3tY)


### Error from `Terminal 2 - backend`?
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
3. Verify that the Kintone Web Database App is updated after generating the API token
4. Verify that the Kintone App is configured as done in the [Create a Kintone App](#create-a-kintone-app) section
