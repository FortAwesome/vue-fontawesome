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

**During pre release, make sure and use `--tag` and `--npm-dist-tag`**

1. Update `package.json` and change `version`
1. Update `README.md` and `package.json`; adding any contributors
1. Update the `CHANGELOG.md`
1. `npm publish --tag prerelease`
1. `npm publish --tag prerelease --registry https://npm.fontawesome.com`
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

```
npm login --registry https://npm.fontawesome.com
```

- The username is the "slug" for your Cloudsmith account. For example mine is "rob-madole".
- Enter the password that you setup just a few minutes ago.
- It says the your email is PUBLIC. Pretty sure that's false since the auth is through Cloudsmith.
- This doesn't overwrite your standard login, just adds to your `~/.npmrc`
