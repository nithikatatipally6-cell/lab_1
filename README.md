# Lab 1: Node.js and Express Server

**Name:** Nithika Tatipally  
**Registration Number:** 252U1R9158  
**Section:** GEN AI

## Objective

Create a basic web server with Node.js's built-in `http` module and a second server with Express. Practice handling routes, returning response data and status codes, and viewing requests in the terminal.

## Technologies

- Node.js and its built-in `http` module
- Express.js
- npm

## Project Files

- `server.js`: Express server and its routes.
- `http-server.js`: basic server built with Node.js `http`.
- `package.json`: project information, commands, and dependencies.
- `package-lock.json`: exact installed dependency versions for repeatable installs.
- `.gitignore`: files Git should not include, such as `node_modules/` and `.env`.
- `screenshots/`: screenshots captured while testing the endpoints.

## About `package.json`

- `name` identifies the npm project.
- `version` is the project's version number.
- `description` briefly explains the project.
- `main` names the project's main JavaScript file.
- `scripts` defines shortcuts for commands. Here, `npm start` starts Express and `npm run start:http` starts the built-in HTTP server.
- `dependencies` lists packages the project needs. Express is the only dependency for this lab.
- `type: commonjs` enables the `require()` syntax used in the code.

## Installation

Open the VS Code terminal in the `lab-01` folder, then run:

```bash
npm install
```

This installs Express using the versions recorded in `package-lock.json`. To recreate the initial setup manually instead, the equivalent commands are `npm init -y` and `npm install express`.

## Start the Servers

Start the Express server:

```bash
npm start
```

Start the basic Node.js HTTP server in a separate terminal after stopping Express with `Ctrl+C`:

```bash
npm run start:http
```

Both servers use port `3000`, so only run one at a time. Each request to the Express server is logged in the terminal with its path and status code.
If port `3000` is already in use, set `PORT` to an available port before starting a server. In PowerShell, for example, run `$env:PORT=3001; npm start` for Express or `$env:PORT=3001; npm run start:http` for the HTTP server.

## Express Endpoints

With `npm start` running, open these URLs in a browser:

| Method | URL | Status | Expected response |
|---|---|---:|---|
| GET | `http://localhost:3000/` | 200 | `Welcome to the Lab 1 Express server!` |
| GET | `http://localhost:3000/about` | 200 | JSON with your name (`Nithika Tatipally`) and section (`GEN AI`). |
| GET | `http://localhost:3000/time` | 200 | The current date and time. |
| GET | `http://localhost:3000/unknown` | 404 | JSON error: `Route not found`. |

## Basic HTTP Server

Run `npm run start:http`, then open `http://localhost:3000/`. It responds with the text `Hello` and status `200` for requests.

## Screenshots

Save your screenshots in the `screenshots/` folder. These placeholders can be replaced with the image filenames you capture:

- Home route: `screenshots/home.png`
- About route: `screenshots/about.png`
- Time route: `screenshots/time.png`
- Unknown route showing status `404`: `screenshots/not-found.png`
- Basic HTTP server showing `Hello`: `screenshots/http-server.png`

For route status codes, capture the browser's developer tools Network panel or use the terminal request checks, since the page itself does not display the HTTP status.

## Common Errors

- **`EADDRINUSE` / port 3000 is already in use:** Stop the other server with `Ctrl+C` before starting this one. The two servers cannot listen on the same port at the same time.
- **`Cannot find module 'express'`:** From the `lab-01` folder, run `npm install`.
- **`npm` or `node` is not recognized:** Install Node.js, reopen VS Code, and check `node --version` and `npm --version` in a new terminal.
- **A route returns 404:** Check the URL spelling and confirm that the server is running from the `lab-01` folder.
