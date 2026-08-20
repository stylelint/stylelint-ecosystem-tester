# Contributing

Thank you for wanting to contribute.

To add a package to this test suite:

1. Check if the package meets the [criteria](README.md#criteria).
2. Add the package to the [list](data/ecosystem.yml).
3. Open a pull request titled `` Add `{package}` `` with the edited file.

The README status table is generated automatically.

## For maintainers

Before merging a pull request that adds packages, trigger the [`Test Ecosystem`](.github/workflows/test-ecosystem.yml) workflow against the pull request branch to check the new packages:

```shell
gh workflow run test-ecosystem.yml --ref <branch> -f packages='<package>'
```

Once merged, the workflow runs on the push to `main` and opens a pull request updating the status table.
