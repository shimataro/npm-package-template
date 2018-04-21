npm package template
===

template for NPM package

## How to publish new version
Develop in `develop` branch.

Merge `develop` branch into `master`. DO NOT COMMIT YET!
```bash
git checkout master
git merge --no-ff --no-commit develop
```

Update version number in `package.json` following [semantic versioning](https://semver.org/)

Re-generate `npm-shrinkwrap.json`.
```bash
rm -rf npm-shrinkwrap.json node_modules
npm install
npm shrinkwrap --dev
```

Stage modified meta files.
```bash
git add package.json npm-shrinkwrap.json
```

Commit changes and push.
```bash
git commit -m "version X.Y.Z"
git tag "vX.Y.Z"
git push
git push --tags
```

Publish!
```bash
npm publish --access=public
```

Finally, apply the changes to `develop`.
```bash
git checkout develop
git merge master
```

That's all!

## License
MIT License

## Copyright
&copy; 2018 shimataro
