install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
publish:
	npx publish
lint:
	npx eslint .