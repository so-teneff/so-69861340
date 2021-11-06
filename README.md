# StackOverflow [Answer][answer] to [Question][question]

## Getting "Cannot use import statement outside a module" even if I have '"type": "module"' in package.json


> For jest support on **ECMAScript modules**, you can take a look at this [GitHub > Issue][github-issue]
> 
> ---
> 
> ### In order to transpile the imports you can use Babel ([jest docs][docs]).
> 
> Install babel:
> ```
> yarn add --dev babel-jest @babel/core @babel/preset-env
> ```
> 
> add babel configuration by creating `babel.config.js` or `.babelrc`
> 
> ```
> module.exports = {
>   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
> };
> ```




[github-issue]:https://github.com/facebook/jest/issues/9430
[docs]:https://jestjs.io/docs/getting-started#using-babel


[answer]: https://stackoverflow.com/a/69862008/637367
[question]: https://stackoverflow.com/questions/69861340/getting-cannot-use-import-statement-outside-a-module-even-if-i-have-type