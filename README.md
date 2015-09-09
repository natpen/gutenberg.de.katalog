# gutenberg.de.katalog
Einen Autorkatalog von http://gutenberg.spiegel.de erzeugen

This is a rudimentary, practical example of a simple node.js project for a linguist friend.

## First steps:

1. Install node/npm (follow instructions [here](https://github.com/creationix/nvm))
2. Clone this repo and `cd` into it
3. `npm install` to get the necessary dependencies
4. Run `node index.js` to generate the catalog

## Future tasks:

1. Persist the author catalog somewhere, e.g., a text file
2. For each author object, add a property containing an array of the author's works, retrieved from the `url` property, which can already be found in the author object
