# Server-Side Rendering React with Lambda

## Info

This handles deployment for a public http api, integrated lambda, and a SSR React App. The handler function uses data and passes into the rendered React components, then injects them into the HTML template. A static HTML page is rendered with the Lambda function on a GET request through the Api Gateway.

## Architecture

<p align="center">
  <img src="/architecture-diagram.drawio.svg" />
</p>

## Usage 

### Credentials:
```bash
export AWS_PROFILE=<profile_name>
```

### Install Dependencies:

```bash
yarn run install
```

### Invoke Locally:

```bash
yarn run invoke
```

Then open `http://localhost:3000` in your browser.

### Deploy:

```bash
yarn run deploy
```

Then open the api gateway endpoint in your browser.

### Remove:

```bash
yarn run remove
```
