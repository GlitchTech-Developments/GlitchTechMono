<h1 align="center">Welcome to my personal website's source-code👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: UNLICENCED" src="https://img.shields.io/badge/License-UNLICENCED-yellow.svg" />
  </a>
</p>

> This is a fork of NextJS with PreactJS instead of React (smaller file sizes) and TypeScript. Feel free to check it out on [here](https://jkinsight.nl)

## Install

```sh
yarn install
```

## Usage

There are two options to run your PreXT project, you can use the Next dev server or the custom production server.
First, run the dev server with:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You could also run the PRS<sup>\*</sup> with:

```sh
npm run server:start
# or
yarn server:start
```

Open [http://localhost:6969](http://localhost:6969) with your browser to see the result.

<span>\* PRS - Production Ready Server<span>

## Docker

> Incase you run into any trouble with these commands you can also use the Docker Desktop application or VScode extention to run these actions. For debugging you can both use the docker exec command or the Docker Desktop Application.

```sh
docker build -t <Username>/<ProjectName>:<VersionNumber> .
docker run -p 3000:3000 <ContainerID>
```

## Author

👤 **Jesse Koldewijn**

- Website: https://jkinsight.nl
- Github: [JesseKoldewijn](https://github.com/JesseKoldewijn)
- LinkedIn: [jesse-koldewijn-5914531a3](https://linkedin.com/in/jesse-koldewijn-5914531a3)

## Show your support

Give a ⭐️ if this project helped you!
