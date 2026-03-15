# @tooling-configs/eslint-config

Shared ESLint configuration (Flat Config) for JavaScript/TypeScript projects. Supports base, React, Next.js, and Expo.

## Prerequisites

- ESLint 9+
- Node 18+

## Usage

### Base (TypeScript, Node, etc.)

```bash
pnpm add -D @tooling-configs/eslint-config eslint typescript-eslint
```

Create `eslint.config.mjs`:

```js
import base from '@tooling-configs/eslint-config/base';

export default [...base];
```

### React

```bash
pnpm add -D @tooling-configs/eslint-config eslint typescript-eslint eslint-plugin-react eslint-plugin-react-hooks
```

Create `eslint.config.mjs`:

```js
import react from '@tooling-configs/eslint-config/react';

export default [...react];
```

### Next.js

```bash
pnpm add -D @tooling-configs/eslint-config eslint next
```

Create `eslint.config.mjs`:

```js
import next from '@tooling-configs/eslint-config/next';

export default [...next];
```

### Expo

```bash
pnpm add -D @tooling-configs/eslint-config eslint typescript-eslint eslint-plugin-react eslint-plugin-react-hooks
```

Create `eslint.config.mjs`:

```js
import expo from '@tooling-configs/eslint-config/expo';

export default [...expo];
```

## Extending

You can add project-specific rules:

```js
import base from '@tooling-configs/eslint-config/base';

export default [
  ...base,
  {
    rules: {
      'no-console': 'error',
    },
  },
];
```

## Included Rules

- **Base**: TypeScript recommended, no-unused-vars, no-console (warn), import sort, Prettier compatibility
- **React**: Base + React recommended + React Hooks
- **Next.js**: React + Next.js recommended + Core Web Vitals
- **Expo**: React (Expo/React Native projects)
