## Messenger
Welcome to the [Messenger](https://vanilla-ts-messenger.herokuapp.com) repository!

## Description
Messenger is a project inspired by Telegram

## Patterns
Following patterns are used in project:
- Event Bus
- Base Block
- MVC

## Technologies
Following technologies are used in project:
- TypeScript
- Webpack
- Docker
- Websocket
- Mocha
- Chai
- Husky

Features is created in project:
- Templator
- Routing
- HTTP API
- Websocket API

## CI/CD
- automation testing with `Mocha/Chai`
- precommit with `Husky`
- `Heroku` automatic deploy

## Scripts

- `npm run lint:ts` — used for static ts code analysis
- `npm run lint:css` — used for static css analysis
- `npm run check:lint` — used for static ts code and css analysis at once
- `npm run check:test` — used for running tests
- `npm run check` — used for static ts code, css analysis and running tests at once
- `npm run build:dev` — used for development building
- `npm run build:prod` — used for production building
- `npm run start` — used for running production build on local server
- `npm run docker:run` — used for running production build on docker
- `npm run watch` — used for watching files and recompile whenever they change
- `npm run serve` — used for running live development server

## Templator Docs

Custom tempaltor requires following simple rules of template design:
- each opening tag have to start with a new line
- if the html element's content consists of more than one element, then each content element have to start with a new line, as well as html element's opening and closing tags
- components can refer to other components (inspired by JSX)
