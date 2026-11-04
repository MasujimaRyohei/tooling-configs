# tooling-configs

Shared ESLint, Prettier, gitignore, and tooling configs for consistent project setup across JavaScript/TypeScript projects.

Use this repository as a central place to manage formatting, linting, and ignore rules for React, Next.js, Expo, Node.js, and similar projects. The goal is to reduce setup friction and keep code style consistent across multiple apps.

## What's Included

| Package / Template                 | Description                                       |
| ---------------------------------- | ------------------------------------------------- |
| `@tooling-configs/prettier-config` | Shared Prettier configuration                     |
| `@tooling-configs/eslint-config`   | ESLint Flat Config for base, React, Next.js, Expo |
| `templates/gitignore/`             | Project-type specific `.gitignore` templates      |

## Directory Structure

```
tooling-configs/
├── packages/
│   ├── prettier-config/    # Prettier shared config
│   └── eslint-config/     # ESLint Flat Config (base, react, next, expo)
├── templates/
│   └── gitignore/         # .gitignore templates by project type
├── docs/
│   ├── setup.md           # Setup guide for new projects
│   ├── rules.md           # Philosophy behind the rules
│   └── coding-rules.ts    # Rule reference in TypeScript
├── .editorconfig          # Editor settings to copy into projects
├── eslint.config.mjs      # ESLint config for this repository
├── pnpm-workspace.yaml
└── package.json
```

## Quick Start

### Prettier

```bash
pnpm add -D github:MasujimaRyohei/tooling-configs#path:packages/prettier-config prettier
```

Add to `package.json`:

```json
{
  "prettier": "@tooling-configs/prettier-config"
}
```

### ESLint

**Base (TypeScript / Node):**

```bash
pnpm add -D github:MasujimaRyohei/tooling-configs#path:packages/eslint-config eslint
```

Create `eslint.config.mjs`:

```js
import base from '@tooling-configs/eslint-config/base';

export default [...base];
```

**React / Next.js / Expo:** See [packages/eslint-config/README.md](packages/eslint-config/README.md) for each variant.

### gitignore Templates

Copy the template that matches your project type:

```bash
cp templates/gitignore/next.gitignore .gitignore
```

Available: `node.gitignore`, `react.gitignore`, `next.gitignore`, `expo.gitignore`

## Current Settings

### Prettier

| Option          | Value  |
| --------------- | ------ |
| `semi`          | `true` |
| `singleQuote`   | `true` |
| `trailingComma` | `all`  |
| `printWidth`    | `100`  |

### ESLint Presets

| Preset  | Extends | Adds                                                                                                 |
| ------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `base`  | —       | `@eslint/js` recommended, `typescript-eslint` recommended, `eslint-config-prettier`, Node.js globals |
| `react` | `base`  | React and React Hooks recommended rules for `.tsx` / `.jsx`, React version auto-detection            |
| `next`  | `react` | Next.js recommended and Core Web Vitals rules for `.ts` / `.tsx` / `.js` / `.jsx`                    |
| `expo`  | `react` | Read-only `__DEV__` global, ignores for `.expo`, `android`, `dist`, `ios`, `web-build`               |

### ESLint Rule Overrides

These are the rules set directly by this repository, on top of the recommended sets above.

| Rule                         | Setting                                 | Preset  | Files                                |
| ---------------------------- | --------------------------------------- | ------- | ------------------------------------ |
| `no-console`                 | `warn`, allows `console.warn` / `error` | `base`  | `.js`, `.mjs`, `.cjs`, `.ts`, `.tsx` |
| `simple-import-sort/imports` | `warn`                                  | `base`  | `.js`, `.mjs`, `.cjs`, `.ts`, `.tsx` |
| `simple-import-sort/exports` | `warn`                                  | `base`  | `.js`, `.mjs`, `.cjs`, `.ts`, `.tsx` |
| `react/react-in-jsx-scope`   | `off`                                   | `react` | `.tsx`, `.jsx`                       |
| `react/prop-types`           | `off`                                   | `react` | `.tsx`, `.jsx`                       |

### ESLint Coverage Limits

- `.jsx` is not linted by the `base` preset. The other presets lint it, but without the `no-console` and import sort rules.
- `.mts` and `.cts` are linted without the `no-console` and import sort rules.
- No preset defines browser globals, so `no-undef` reports `window` and `document` in `.js` / `.jsx`. TypeScript files are not affected because `no-undef` is off for them.

### EditorConfig

| Setting                    | Value                  |
| -------------------------- | ---------------------- |
| `charset`                  | `utf-8`                |
| `indent_style`             | `space`                |
| `indent_size`              | `2`                    |
| `end_of_line`              | `lf`                   |
| `insert_final_newline`     | `true`                 |
| `trim_trailing_whitespace` | `true` (except `*.md`) |

### gitignore Templates

All templates cover dependencies, build output, environment files, logs, OS files, IDE files, coverage, and caches. Each template adds the following:

| Template          | Additional entries                                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `node.gitignore`  | —                                                                                                                                        |
| `react.gitignore` | `.eslintcache`                                                                                                                           |
| `next.gitignore`  | `.next/`, `.vercel`, `.eslintcache`                                                                                                      |
| `expo.gitignore`  | `.expo/`, `web-build/`, signing files (`*.jks`, `*.p8`, `*.p12`, `*.key`, `*.mobileprovision`), Metro health check files, `.eslintcache` |

### Requirements

| Item                  | Version / Packages                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Node.js               | `>=20.19.4`                                                                                                          |
| pnpm                  | `10.0.0` (`packageManager`)                                                                                          |
| Required ESLint peers | `eslint`, `@eslint/js`, `eslint-config-prettier`, `eslint-plugin-simple-import-sort`, `globals`, `typescript-eslint` |
| Optional ESLint peers | `eslint-plugin-react`, `eslint-plugin-react-hooks` (`react`, `next`, `expo`), `@next/eslint-plugin-next` (`next`)    |

## Documentation

- [Setup Guide](docs/setup.md) — Step-by-step setup for new projects
- [Rules Philosophy](docs/rules.md) — Why these rules exist and how to think about them
- [Coding Rules Reference](docs/coding-rules.ts) — TypeScript で定義されたルール一覧（Prettier / ESLint / EditorConfig）

## Scripts

| Script                  | Description                      |
| ----------------------- | -------------------------------- |
| `pnpm run format`       | Format all files with Prettier   |
| `pnpm run format:check` | Check formatting without writing |
| `pnpm run lint`         | Run ESLint across workspace      |
| `pnpm run check`        | Format check + lint              |

## Future Plans

- Add more project-type presets (e.g. Vite, Remix)
- Optional stricter rule sets
- CI workflow examples
- Publish to npm for easier consumption

## License

MIT
