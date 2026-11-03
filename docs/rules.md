# Rules Philosophy

The goal of these configs is not to enforce strict dogma, but to **reduce decision cost** across multiple projects. When every app uses the same baseline, you spend less time debating style and more time building.

## Core Ideas

### Formatting → Prettier

All formatting (quotes, semicolons, line width, etc.) is delegated to Prettier. ESLint does not duplicate formatting rules. This avoids conflicts and keeps a single source of truth for how code looks.

### Quality → ESLint

ESLint focuses on code quality: unused variables, potential bugs, import order, and framework-specific best practices. It does not care about spacing or quote style.

### Separation of Concerns

| Concern              | Tool     | Examples                                        |
| -------------------- | -------- | ----------------------------------------------- |
| Appearance           | Prettier | semicolons, quotes, line breaks                 |
| Safety & consistency | ESLint   | no-unused-vars, React Hooks rules, import order |

### Practical Over Strict

Rules are tuned to be **useful without being annoying**. For example:

- `no-console` is a warning, not an error (debugging is allowed)
- `react/prop-types` is off (TypeScript handles types)
- Import sort is a warning (easy to fix, low risk)

You can always tighten rules in a specific project if needed.

## What Each Config Covers

**Base:** TypeScript recommended rules, unused vars, console usage, import sort, Prettier compatibility.

**React:** Base + React recommended + React Hooks. JSX scope and prop-types are relaxed for TypeScript projects.

**Next.js:** React + Next.js recommended + Core Web Vitals. Image, link, and script usage rules.

**Expo:** React + `__DEV__` global + ignores for generated Expo and native directories.

## Extending

These configs are meant to be extended. Add project-specific overrides in your `eslint.config.mjs` or `.prettierrc.js` as needed. The shared config is a starting point, not a lock-in.
