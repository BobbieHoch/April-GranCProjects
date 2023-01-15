# TDD Lab 2
Instructions are in the Lab Document in the LMS.

## Setup
Run > `npm install`

### To Run Tests (in development)
Run > `npm run test:dev`

### To View Site in Browser (in development)
- Run > `npm run build:dev`
- Live Serve `build/index.html`

## Organization
The website code is in the `src` folder.
- `src/index.html` - main HTML file
- `src/js` - JavaScript files
- `src/css` - CSS files

The testing code is in the `tests` folder.

The site must be built in order to be opened in a browser. The built site will be in the `build` folder.

## Scripts
This project has the following NPM scripts in `package.json`.

- `npm run build` - Webpack bundles the JS and copies the HTML & CSS to the build directory. It optimizes the files for production. It does not continue to watch for changes.
- `npm run build:dev` - Run in development mode. Webpack bundles the JS and copies the HTML & CSS to the build directory. It watches the `src` files to keep the build up-to-date as you develop. Use `CTRL+C` to stop.
- `npm test` - Run the tests.
- `npm run test:dev` - Run the tests continually. Watch for files to change and rerun tests as needed. Press `q` to stop.

## Notes
- package.json configuration is already complete. It has the needed dependencies and scripts.
- Webpack configuration is already complete. It has settings for a 'dev' environment and a 'prod' environment.
