# React-Redux-Webpack2-seed

Simple and optimized React Hello World. It includes:

- [x] React 15.4.2
- [x] ECMAScript 6 and JSX support
- [x] React Router
- [x] Latest Webpack (v.2.2) and Webpack Dev Server (v.2.2)
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] SASS support
- [x] Separate CSS stylesheets generation
- [x] Automatic HTML generation
- [x] Production Config
- [x] Custom Babel Preset with Decorators, Class Properties, Rest/Spread operator support 
- [x] ES6 Linting
- [x] Export Separate Vendor Files
- [x] Redux

## Starting the dev server

Make sure you have Node.js installed.

1. `git clone https://github.com/nguyenJS/react-redux-webpack2-seed.git`
2. Run `npm install` or `yarn install`
3. Start the dev server using `npm start`
3. Open [http://localhost:8080](http://localhost:8080)

## Available Commands

- `npm start` - start the dev server
- `npm clean` - delete the dist folder
- `npm run production` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm test` - run all tests

## Vendor Exporting

You can export specific vendors in separate files and load them. All vendors should be included in `app/vendors` and will be exported in a `vendors` folder under `dist`. The main idea is to serve independent JavaScript and CSS libraries, though currently all file formats are supported.

! Don't forget to add the vendors in `app/index.html`.

## Production code

Run `npm run production`. The production-ready code will be located under `dist` folder.