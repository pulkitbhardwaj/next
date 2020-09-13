// relay.config.js
module.exports = {
	// ...
	// Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
	src: './',
	exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
	schema: './schema.graphql',
	extensions: ['ts', 'tsx'],
	language: 'typescript',
	artifactDirectory: './__generated__',
}
