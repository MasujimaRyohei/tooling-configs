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
│   └── rules.md           # Philosophy behind the rules
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
