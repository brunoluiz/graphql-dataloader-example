watch:
	@NODE_ENV=development npm run watch --silent

demo:
	@NODE_ENV=development npm run watch --silent | jq .msg -r
