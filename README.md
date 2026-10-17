# COMP3104 - Developer Operations

[![CI](https://github.com/EdoiseO/COMP3104/actions/workflows/ci.yml/badge.svg)](https://github.com/EdoiseO/COMP3104/actions/workflows/ci.yml)

## Class Exercises 05 and 06 - React SPA and GitHub Pages

Student: **Phillip Onofua** | Student ID: **101489064**

This project uses the instructor's Student Information System starter, with the student's identity updated. The React 18 / Create React App 5 configuration follows the lab brief. The app adds a student's name, age and major to an in-memory list and clears the form after submission. Reloading starts a fresh list.

Live app: https://edoiseo.github.io/COMP3104/

From the repository root:

```sh
npm ci
npm run build
npm test -- --watchAll=false --runInBand
npm start
```

Open `http://localhost:3000` for the development app.

The component integration test verifies the student identity, adding a student, displaying their details and clearing the form. For a single non-interactive test run:

```sh
CI=true npm test -- --watchAll=false --runInBand
```

Express from Exercise 04 is preserved. Generated `node_modules` and `build` folders are ignored on the source branches. The `homepage` setting points to the GitHub Pages project URL so production assets load under `/COMP3104/`.

## Exercise 06 deployment

Work is committed on `dep-inclusions` and merged into `main` through a pull request. CI installs the locked dependencies, builds the app and runs the component test on branch pushes and pull requests to main. A successful main build deploys the production files to `gh-pages`. Pull requests validate the app without publishing it.

GitHub Pages uses **Deploy from a branch**, with **gh-pages / (root)** as its source. The deployment job uses the automatic `GITHUB_TOKEN`; only that job has content and Pages write permissions. After publishing the files, it requests a Pages build explicitly because a token-authored branch push alone does not trigger one.

The lab's local deployment command remains available:

```sh
npm run deploy
```

Its `predeploy` script builds the app before `gh-pages` publishes the `build` directory. Source history remains on `main` and `dep-inclusions`; the generated site is on `gh-pages`.

Repository: https://github.com/EdoiseO/COMP3104
Branch: https://github.com/EdoiseO/COMP3104/tree/dep-inclusions
