# Developing vue-fontawesome with Vue 3

## Tasks

The following commands are available through `npm run` or `yarn`:

| Command | Purpose                                                 |
| ------- | ------------------------------------------------------- |
| build   | Build a development version of the library using Rollup |
| dist    | Build a production version of the library using Rollup  |
| test    | Execute unit tests                                      |

## Testing against multiple Font Awesome SVG Core versions

The library supports `@fortawesome/fontawesome-svg-core` v1 (Font Awesome 5), v6, and v7. The default devDependency is v7, but you can temporarily swap versions without modifying `package.json`. Note that `package-lock.json` will be updated — run `git checkout -- package-lock.json` when done to restore it.

```bash
# Test against v5
npm install --no-save @fortawesome/fontawesome-svg-core@~1 @fortawesome/free-solid-svg-icons@~5
npm run test

# Test against v6
npm install --no-save @fortawesome/fontawesome-svg-core@~6 @fortawesome/free-solid-svg-icons@~6
npm run test

# Restore v7
npm install --no-save @fortawesome/fontawesome-svg-core@~7 @fortawesome/free-solid-svg-icons@~7

# Clean up lockfile changes
git checkout -- package-lock.json
```

Each version runs a subset of the tests — blocks guarded by version feature flags are automatically skipped.

## Release this project

**During pre release, make sure and use `--tag` and `--npm-dist-tag`**

1. Update `package.json` and change `version`
1. Run `npm install` to sync `package-lock.json`
1. Update `README.md` and `package.json`; adding any contributors
1. Update the `CHANGELOG.md`
1. `npm publish --tag latest-3 --registry=https://registry.npmjs.org/`
1. `npm dist-tag add --registry=https://registry.npmjs.org/ @fortawesome/vue-fontawesome@[VERSION_NUMBER] latest`
1. `npm publish --tag latest-3 --registry=https://npm.fontawesome.com`
1. `npm dist-tag add --registry=https://npm.fontawesome.com @fortawesome/vue-fontawesome@[VERSION_NUMBER] latest`
1. `git add .`
1. `git commit -a -m 'Release VERSION'`
1. `git push`
1. Create a [new release](https://github.com/FortAwesome/vue-fontawesome/releases/new) with CHANGELOG details

## Authenticating with the npm.fontawesome.com registry

Contributors with authorization to publish to npm.fontawesome.com will receive an invite
from a Font Awesome project owner.

1. Respond to the invite in your email
1. Let the owner know when you've setup your account
1. Owner will add you to the team

You can then run:

```bash
npm login --registry https://npm.fontawesome.com
```

- The username is the "slug" for your Cloudsmith account. For example mine is "rob-madole".
- Enter the password that you setup just a few minutes ago.
- It says the your email is PUBLIC. Pretty sure that's false since the auth is through Cloudsmith.
- This doesn't overwrite your standard login, just adds to your `~/.npmrc`
