# Development

Info on how to run the application locally

## How to run locally

You'll need to run two separate processes to facilitate restarting the backend express app and the frontend react app.

In one terminal session, run

```console
npm run dev:client
```

and in another session run

```console
npm run dev:server
```

The magic in the setup is in the `proxy` attribute in the `package.json`. This will allow us to proxy requests to the server from the hot module reloaded react app. For more information, read [this](https://create-react-app.dev/docs/proxying-api-requests-in-development/).
