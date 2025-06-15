# sorting-algorithms

Visual demonstrations of common sorting algorithms.

## Requirements

This project requires Node.js version 20 or higher. The requirement is
enforced via the `engines` field in `package.json`.

## Installation

Install the dependencies:

```bash
npm install
```

## Building

Build the project with:

```bash
npm run build
```

Run the development build and watch for changes with:

```bash
npm run build:watch
```

Both commands output the bundled file into the `dist/` directory which is
referenced by `index.html`.

## Running tests

Execute the Karma test suite:

```bash
npm test
```

The tests run in a jsdom environment so no browser installation is required.

## Demo

<http://jasminenoack.com/sorting-algorithms/>
