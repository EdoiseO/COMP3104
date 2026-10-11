# COMP3104 Class Exercise 05 React SPA draft

This local draft implements the requirements visible on native Brightspace assignment 384504: a React web page showing Phillip Onofua and student ID 101489064. It is on the local `dep-inclusions` branch.

The detailed official `lab05-devops-spa-react.docx` could not be read because browser security rejected its download after permission was declined. Vite is a provisional implementation choice. Any supplied code, exact dependency/build setup, additional tasks, and screenshot naming in that document remain unverified. This draft is **not yet cleared for submission**.

## Run and validate

From this directory, using Node 20.19+ or Node 22.12+:

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. Stop the server with Ctrl+C.

```sh
npm run build
npm run preview
```

The application uses React's `createRoot` to mount one page. No test suite is claimed. The production build and actual browser rendering are the relevant checks for this simple page.

The course's earlier Node/Express package and GitHub Actions files remain in the repository root; this draft has its own package and lockfile under `react-spa`.
