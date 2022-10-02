# Steps to Complete the Kintone x React App Setup

## Outline <!-- omit in toc -->
* [Prep: Got NodeJS?](#prep-got-nodejs)
* [Step 1: Git clone & Install Dependencies](#step-1-git-clone--install-dependencies)
* [Step 2: Create a Kintone Web Database App](#step-2-create-a-kintone-web-database-app)
  * [Step 2 - A: Build the Kintone App](#step-2---a-build-the-kintone-app)
  * [Step 2 - B: Generate a Kintone API Token](#step-2---b-generate-a-kintone-api-token)
  * [Step 2 Video: How to Create a Kintone Database App](#step-2-video-how-to-create-a-kintone-database-app)
  * [Step 3: Create a `.env` File](#step-3-create-a-env-file)
* [Expected Results](#expected-results)
  * [Right After `npm install`](#right-after-npm-install)
  * [After Creating a `.env`](#after-creating-a-env)
  * [After Completing the POST Section](#after-completing-the-post-section)

## Prep: Got NodeJS?

React requires **Node ≥ 10.16** & **npm ≥ 5.6**  
Go **inside** the `React_Workshop_by_Kintone` folder.

```shell
$ node -v
$ npm -v
```

If Node & npm are missing, let's install them!
* Here is a step-by-step [Guide on Installing Node.js & npm](Install_NodeJS.md)

## Step 1: Git clone & Install Dependencies

First, let's download the [ahandsel/React_Workshop_by_Kintone](https://github.com/ahandsel/React_Workshop_by_Kintone) Repo and go inside the folder.

```bash
cd Downloads

git clone https://github.com/ahandsel/React_Workshop_by_Kintone

cd React_Workshop_by_Kintone
```

```bash
ls

README.md   Slides.pdf   backend   frontend
```

Inside there should be two folders (`frontend` & `backend`) and a README file & Slides PDF.

Open the `React_Workshop_by_Kintone` folder in [VS Code](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_command-line)

```bash
code .
```

Let's open a terminal per folder.  
Then inside the folders, download the required packages with `npm install`.

|                      | Terminal 1 - Frontend                               | Terminal 2 - Backend                               |
| -------------------- | --------------------------------------------------- | -------------------------------------------------- |
| Go inside the folder | `cd ~/Downloads/React_Workshop_by_Kintone/frontend` | `cd ~/Downloads/React_Workshop_by_Kintone/backend` |
| What is inside?      | Code for the React App                              | Code for the Express server                        |
| Install packages     | `npm install`                                       | `npm install`                                      |
| Prep Tasks           |                                                     | Rename `.env.example` file to `.env` beforehand    |
| To run the scripts   | `npm start`                                         | `npm start`                                        |

### ⚡ Notes ⚡ <!-- omit in toc -->

⚡ React requires **Node ≥ 10.16** & **npm ≥ 5.6** ⚡
* Check the versions inside the `React_Workshop_by_Kintone` folder:
  * `node -v`
  * `npm -v`
* Not the correct versions or Confused? 🤔 → Check out the [Guide on Installing Node.js & npm](Install_NodeJS.md)

⚡ Note: Please ignore the package deprecation warnings ⚡

🔎 The `npm install` command installs the required dependencies defined in the package.json files (in both the [frontend](frontend/package.json) & [backend](backend/package.json) folders) and generates a node_modules folder with the installed modules.

## Step 2: Create a Kintone Web Database App

### Step 2 - A: Build the Kintone App
Let's create a Kintone App to list off your favorite [manga](https://en.wikipedia.org/wiki/Manga)s!

Here are the required fields & their configurations for our workshop:

| Field Type | Field Name | Field Code | Note               |
| ---------- | ---------- | ---------- | ------------------ |
| Text       | Title      | `title`    | The manga's title  |
| Text       | Author     | `author`   | The manga's author |

Confused? 🤔 → Check out the [How to Create a Kintone Database App](https://youtu.be/pRtfn-8cf_I) video 📺  

### Step 2 - B: Generate a Kintone API Token
To generate an API Token for a Kintone App:

1. Go to the Kintone App
2. Go to the Gear icon ⚙️ (top right corner) > Open the App Settings page
3. Click on the **App Settings** Tab > Click on **API Token** settings
4. Click the `Generate` button to generate a token
5. Click the `Save` button (top left corner) to save the token setting
6. Finally, click the `Update App` button (top right corner) to implement the token setting change.

Confused? 🤔 → Check out the [Get the API Token](https://youtu.be/pRtfn-8cf_I?t=117) video clip 📺  

### Step 2 Video: How to Create a Kintone Database App

<p align="center">
  <a href="https://youtu.be/pRtfn-8cf_I">
    <img height="200" alt="How to Create a Kintone Database App YouTube Thumbnail"
      src="https://img.youtube.com/vi/pRtfn-8cf_I/hqdefault.jpg">
  </a>
</p>

### Step 3: Create a `.env` File

1. Using the [backend/.env.example](backend/.env.example) file as a template, create a `.env` file.
1. Then input your Kintone credentials like the following:

```.env
SUBDOMAIN = "example"
APPID = "1"
APITOKEN = "abcdefghijklmnopqrstuvwxyz"
```

### ⚠️ DO NOT DELETE THE [.env.example](.env.example) FILE!  <!-- omit in toc -->
[.env.example](.env.example) is used by env-cmd to verify that `.env` file is correctly configured.

In the `backend` folder, **rename** the `.env.example` to `.env`!

Then following the template, input your Kintone credentials.

`.env` template:

```.env
SUBDOMAIN = ""
APP_ID = ""
API_TOKEN = ""
```

Here is an example `.env` file.

```.env
SUBDOMAIN = "example"
APPID = "1"
API_TOKEN = "dXNlckBvbTpzZWNyZXQe9q3IhtcGleGFLtcGxlmN"
```

---

## Expected Results

Here are the expected results after running the `npm start` in both the terminals.

### Right After `npm install`

|                  | Terminal 1 - Frontend                                                                                                | Terminal 2 - Backend                                                                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| View Results     | [localhost:3000](http://localhost:3000/)                                                                             | On the Terminal                                                                                                      |
| Expected Results | ![React_v3_img/Terminal_1_A.png](https://github.com/ahandsel/img/blob/master/React_v3_img/Terminal_1_A.png?raw=true) | ![React_v3_img/Terminal_2_A.png](https://github.com/ahandsel/img/blob/master/React_v3_img/Terminal_2_A.png?raw=true) |

### After Creating a `.env`

|                  | Terminal 1 - Frontend                                                                                                | Terminal 2 - Backend                                                                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| View Results     | [localhost:3000](http://localhost:3000/)                                                                             | [localhost:5000/getData](http://localhost:5000/getData)                                                              |
| Expected Results | ![React_v3_img/Terminal_1_B.png](https://github.com/ahandsel/img/blob/master/React_v3_img/Terminal_1_B.png?raw=true) | ![React_v3_img/Terminal_2_B.png](https://github.com/ahandsel/img/blob/master/React_v3_img/Terminal_2_B.png?raw=true) |

### After Completing the POST Section

|                  | Terminal 1 - Frontend                                                                                                | Terminal 2 - Backend |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------- |
| View Results     | [localhost:3000](http://localhost:3000/)                                                                             | n/a                  |
| Expected Results | ![React_v3_img/Terminal_1_C.png](https://github.com/ahandsel/img/blob/master/React_v3_img/Terminal_1_C.png?raw=true) | n/a                  |
