# Sip or Skip

A fun drinking game to play with friends.

## Table of Contents

- [Documentation](#Documentation)
- [Contributors](#Contributors)
- [Available Scripts](#available-scripts)
  - [npm run start](#npm-run-start)
  - [npm run test](#npm-run-test)
  - [npm run test:watch](#npm-run-testwatch)
  - [npm run build](#npm-run-build)
  - [npm run analyze-bundle](#npm-run-analyze-bundle)
- [Project Development Setup](#project-development-setup)
  - [Code Splitting](#code-splitting)
  - [Advanced Configuration](#advanced-configuration)
  - [Deployment](#deployment)
- [Hosting](#Hosting)

## Documentation

Link to any documentation here.

### Further Reading

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React documentation](https://reactjs.org/).

## Contributors

| Name          | Email                                                  | Role              |
| ------------- | ------------------------------------------------------ | ----------------- |
| Oliver Wilson | [contact@oliverwilson.dev](contact@oliverwilson.dev)   | software engineer |

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Runs the unit tests and will report code coverage at the end.\
If any of the tests fail or if code coverage is not 100% for the files required then this command will fail.

### `npm run test:watch`

Runs the unit tests against the files changed with the watch mode. Tests will re-run on every saved file change.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run analyze-bundle`

Runs `npm run build` and then uses [`source-map-explorer`](https://www.npmjs.com/package/source-map-explorer) to analyse the bundle produced.

## Project Development Setup

### Code Splitting

Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.

This project setup supports code splitting via [dynamic `import()`](https://2ality.com/2017/01/import-operator.html#loading-code-on-demand). Its proposal is in stage 4. The `import()` function-like form takes the module name as an argument and returns a `Promise` which always resolves to the namespace object of the module.

Read more on this topic in the create-react-app documentation [here](https://facebook.github.io/create-react-app/docs/code-splitting)

### Advanced Configuration

Read more on this topic in the create-react-app documentation [here](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

Read more on this topic in the create-react-app documentation [here](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

Read more on this topic in the create-react-app documentation [here](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Hosting

This application is hosted via the Google Cloud Platform.

Some files related to this are `app.yaml`, `.gcloudignore` and `./github/workflows/release.yaml`. They are all required.

For information on the Github action used to deploy the application and start it on the Google Cloud Platform, [click here](https://github.com/google-github-actions/setup-gcloud/tree/master/appengine-deploy).
