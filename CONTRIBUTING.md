# CONTRIBUTING TO LUMINA

To get up and running, install the dependencies and run the solution:

```shell
pnpm install
pnpm dev
```

## Documentation

Storybook is used to showcase Lumina documentation, components and pages.

Please, add and update all stories and MDX documentation where required.

To run Storybook:

```shell
pnpm storybook
```

## Coding Conventions

We use Conventional Commits to standartise the commit messages.

> The pattern is the following:
> `{flag | flag(scope)}: {commit message}`

Example:\
`feat: added cancel button to component selection panel`

In short, these are the most used prefixes:

- feat:
- fix:
- docs:
- style:
- test:
- chore:

When working on a feature or fix that belongs to a specific _scope or initiative_ inside the Project, please use scopes.

It makes it easier to identify in what broad feature the commit belongs to:\
`feat(editor): added cancel button to component selection panel`

When introducing a _BREAKING CHANGE_ just append a question mark `!` after the flag:

- feat!:
- fix!:
- feat(editor)!:
- fix(editor)!:

For more information, please refer to [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/#summary).

## Workflow

Current git strategy and development workflow.

1. Branch out from `master`
2. Code away, test, fix, refactor! 👩‍💻
3. Commit your changes (use the conventions mentioned above)
4. Lint your code with `pnpm lint`, make sure no errors are found
5. Push your work to a new Pull Request to GitHub
6. Check for issues with the deployment in Vercel Dashboard, goto step 2 if anything
7. Keep an eye for reviewers comments
8. When approved, merge to `master`
9. Inform team mates that the PR was merged

_Happy coding!_
