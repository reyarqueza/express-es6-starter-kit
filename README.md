# express es6 starter kit
### A barebones starter kit to be able to use es6 with express!

There are many es6 starter kits out there with express. Most developers just roll their own from the ground up, however starter kits can help developers save time to get up and running. This minimalist starter kit can help you get started with just express and es6, and you add on the rest! 

### What makes this starter kit different from others?
  * It uses babel-watch. (https://github.com/kmagiera/babel-watch)
  * It uses the babel-preset-env and babel-polyfill. (https://babeljs.io/)

1) Clone the express es6 starter kit.

```
git clone https://github.com/reyarqueza/express-es6-starter-kit.git
```

2) Rename the directory to [your-project-directory]

```
mv express-es6-starter-kit [your-project-directory]
```

3) Initialize git to your own repository.

```
cd [your-project-directory]
rm -rf .git && git init
``` 

4) Update package.json with the following command to replace  express-es6-starter-kit with your own project information.
```
npm init
```

5) Install it as your own!

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

