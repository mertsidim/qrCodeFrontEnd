# QrGenerator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

### Pre-requisites

- Install npm and nodeJs `https://nodejs.org/`

$ node --version
- Must be `npm version >= 6.x`

$ npm --version
- Must be `npm version >= 12.x`

- Install required dependencies
$ npm install -g @angular/cli
$ npm install

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

$ ng serve

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# For Staging Server
$ ng build

# For Live production Server
$ ng build --prod

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### File Structure

```
.
├── angular.json
├── browserslist
├── dist
├── e2e
├── karma.conf.js
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app
│   │   ├── auth
│   │   ├── dynamic-qr
│   │   ├── layouts
│   │   ├── redirect-qr
│   │   ├── services
│   │   ├── shared
│   │   │   ├── middleware
│   │   │   ├── page-not-found.ts
│   │   │   ├── qrConfig
│   │   │   ├── settings
│   │   │   ├── shared.module.ts
│   │   └── static-qr
│   ├── assets
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json

```
