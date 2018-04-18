install:
	npm install

debug:
	npm run compile

start:
	npm run babel-node -- src/bin/brain-games.js

publish: lint;
	npm publish

build: lint;
	npm run build	

lint:
	npm run eslint .