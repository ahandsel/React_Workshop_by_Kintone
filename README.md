# React Workshop by [Kintone](https://developer.kintone.io/hc/en-us/) - Version 3

## Let's POST Data to a Web Database From a React Component <!-- omit in toc -->

Thank you for attending our **Kintone x React** workshop!  

## Outline <!-- omit in toc -->
* [Get Started](#get-started)
* [Kintone Web Database & Credentials](#kintone-web-database--credentials)
  * [🚀 Getting your FREE Kintone Database](#-getting-your-free-kintone-database)
    * [① Sign-Up for Developer Program Account (Website) 🌐](#-sign-up-for-developer-program-account-website-)
    * [② THEN Create a Kintone Subdomain (Database) 📂](#-then-create-a-kintone-subdomain-database-)
  * [🔐 Securely input your credentials in a `.env` file](#-securely-input-your-credentials-in-a-env-file)
* [Encountered Problems?](#encountered-problems)
  * [How do I get my Kintone Subdomain?](#how-do-i-get-my-kintone-subdomain)
  * [💾 Install Node & npm](#-install-node--npm)

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

| Terminal 1 - Frontend                               | Terminal 2 - Backend                               |
| --------------------------------------------------- | -------------------------------------------------- |
| `cd ~/Downloads/React_Workshop_by_Kintone/frontend` | `cd ~/Downloads/React_Workshop_by_Kintone/backend` |
| `npm install`                                       | `npm install`                                      |

## Kintone Web Database & Credentials

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

### 💾 Install Node & npm
The code in the workshop requires Node ≥ 10.16 and npm ≥ 5.6.

Confused? 🤔 → Check out our [Install Node.JS on macOS & Windows and Create a Sample React App - YouTube](https://www.youtube.com/watch?v=4Kw-i_rX3tY) Video!
  * [![https://youtu.be/4Kw-i_rX3tY](https://img.youtube.com/vi/4Kw-i_rX3tY/mq1.jpg)](https://youtu.be/4Kw-i_rX3tY)

