# GitHub Copilot Extension Backend Template

This is a template for creating a backend for the GitHub Copilot Extension. It is a simple Node.js server that listens for requests from the extension and responds with the appropriate data.

## Stack

The template uses `node.js` as a base and `express.js` as the web server. It comes also with `octokit.js` to interact with the GitHub API. The template also includes the [`@copilot-extensions/preview-sdk`](https://github.com/copilot-extensions/preview-sdk.js) package that helps simplifying the process of building an extension as agent.

- `node.js`
- `express.js`
- `octokit.js`
- `@copilot-extensions/preview-sdk`

## Getting Started

After cloning the repository, you need to install the dependencies by running:

```bash
npm install
```

Then, you can start the server by running:

```bash
npm start
```

Start creating your extension by adding code to `src/index.js` on line 13:

```js
app.post('/agent', (req, res) => {
    // Your agent code starts here
});
```

From there on it is up to you to implement the logic for your extension.

## Devcontainer

This template comes with a `devcontainer.json` file that allows you to use Visual Studio Code's Remote - Containers extension to develop the extension in a containerized environment.

The container definition contains some settings for your convenience:

- GitHub Copilot is installed
- The port `3000` is exposed when the container is started. This way you can used the codespace as server to run your backend. Read more on how to do it in [this article](https://aatmmr.dev/posts/create-a-basic-agent-with-github-copilot-extensions/).