# Contributing

## Releasing

1. Branch off of develop naming the new branch `[configType]/vX.Y.Z` e.g. `eslint/v1.0.0`
2. cd into the config folder that is being released
3. Run `npm version [major/minor/patch]`
4. Create and merge a PR into develop, and then from develop into main
5. Checkout main
6. Ensure you are logged into an npm account that is a member of the @boston-scientific organization
7. Still in the package folder, run `npm publish`
8. Create and push a git tag named `[configType]/vX.Y.Z` e.g. `eslint/v1.0.0`
