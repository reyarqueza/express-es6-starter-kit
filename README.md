# express es6 starter kit
### A barebones starter kit to be able to use es6 with express!

1) Clone the es6 starter kit.

```
git clone https://github.com/reyarqueza/express-es6-starter-kit.git
```

2) Remove me from the github source and package.json.

```
rm -rf .git && git init && npm init
``` 

3) Install it as your own!

```
npm install
```

### npm run commands

  * To run in dev and transpile in memory for faster reload times during development.
  
```
npm run dev
```

  * To run in prod to pre-transpile files, and serve transpiled files (fastest).
  
```
npm run build
npm start
```


### What makes this starter kit different from others?
  * It uses babel-watch (faster) instead of nodemon+babel-register or nodemon+babel-node
  * Its set to use latest es6 preset (babel-preset-env) and babel-polyfill
  * Its very barebones, you add the rest!
