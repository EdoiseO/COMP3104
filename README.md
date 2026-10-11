# COMP3104 - Developer Operations

[![CI](https://github.com/EdoiseO/COMP3104/actions/workflows/ci.yml/badge.svg)](https://github.com/EdoiseO/COMP3104/actions/workflows/ci.yml)

## Class Exercise 05 - React SPA

Student: **Phillip Onofua** | Student ID: **101489064**

The `dep-inclusions` branch contains the instructor's Student Information System starter, with the student's identity updated. The React 18 / Create React App 5 configuration follows the official lab brief. The app adds a student's name, age and major to an in-memory list and clears the form after submission. Reloading starts a fresh list.

From the repository root:

```sh
npm ci
npm run build
npm start
```

Open `http://localhost:3000` for the development app.

The brief retains an echo-only `npm test` placeholder. Run the actual component integration test with:

```sh
CI=true ./node_modules/.bin/react-scripts test --watchAll=false --runInBand
```

The supplied obsolete Learn React test was replaced with a test of adding a student and resetting the form. Form labels were associated with their inputs. Express from Exercise 04 is preserved. The inherited explicit CommonJS package type was removed so Webpack can parse the starter's ES-module imports; Node still defaults to CommonJS for ordinary Node scripts. `gh-pages` is declared once as a development dependency; `^6.1.1` satisfies both overlapping ranges shown in the brief. Generated `node_modules` and `build` folders are ignored. The inherited repository URL was replaced with a relative app homepage (`.`), so the local app and build assets load correctly; the repository link remains in repository metadata and below.

Exercise 05 ends with pushing `dep-inclusions`. Merging into main and configuring GitHub Pages deployment are reserved for the next lab. The existing CI badge reflects the repository workflow; it is not proof of a React build or test run.

Repository: https://github.com/EdoiseO/COMP3104
Branch: https://github.com/EdoiseO/COMP3104/tree/dep-inclusions
