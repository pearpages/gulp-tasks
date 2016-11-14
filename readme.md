# Using Gulp

```
node -v
npm -v
```

```
sudo npm install -g Gulp
gulp -v
```

```
npm install --save-dev gulp
```

## gulp.task

```javascript
gulp.task('name', [dependencies], function() {});
```

```js
gulp.task('copy-build', ['copy-assets', 'copy-app-js', 'copy-vendor-js']);
```

```bash
gulp copy-build
```

## gulp runs the task asynchronously

Therefore, sometimes we need to run them sequentially.

```bash
npm install --save-dev run-sequence
```

## delete files

```bash
npm install --save-dev del
```

## injecting

```bash
npm install --save-dev gulp-inject
```

## serve

```bash
npm install --save-dev gulp-serve
```