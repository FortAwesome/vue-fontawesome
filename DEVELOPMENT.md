# Developing vue-fontawesome

## Tasks

The following commands are available through `npm run` or `yarn`:

Command     | Purpose
---         | ---
build       | Build a development version of the library using Rollup
dist        | Build a production version of the library using Rollup
test        | Execute unit tests

## Release this project
<a name="release"></a>

1. Update `package.json` and change `version`
1. Update `README.md` and `package.json`; adding any contributors
1. Update the `CHANGELOG.md`
1. `npm publish`
1. `npm pack`
1. `CLOUDSMITH_API_KEY=API_TOKEN cloudsmith upload npm fortawesome/fontawesome-pro ./fortawesome-vue-fontawesome-VERSION.tgz`
1. `git add index.js index.es.js`
1. `git commit -a -m 'Release VERSION'`
1. `git push`
1. Create a [new release](https://github.com/FortAwesome/vue-fontawesome/releases/new) with CHANGELOG details
