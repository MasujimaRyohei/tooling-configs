# @tooling-configs/eslint-config

Shared ESLint configuration (Flat Config) for JavaScript/TypeScript projects. Supports base, React, Next.js, and Expo.

## Prerequisites

- ESLint 9+
- Node.js 20.19.4+

## Usage

### Base (TypeScript, Node, etc.)

```bash
pnpm add -D github:MasujimaRyohei/tooling-configs#path:packages/eslint-config eslint
```

Create `eslint.config.mjs`:

```js
import base from '@tooling-configs/eslint-config/base';

export default [...base];
```

### React

```bash
pnpm add -D github:MasujimaRyohei/tooling-configs#path:packages/eslint-config eslint eslint-plugin-react eslint-plugin-react-hooks
```

Create `eslint.config.mjs`:

```js
import react from '@tooling-configs/eslint-config/react';

export default [...react];
```

### Next.js

```bash
pnpm add -D github:MasujimaRyohei/tooling-configs#path:packages/eslint-config eslint eslint-plugin-react eslint-plugin-react-hooks @next/eslint-plugin-next
```

Create `eslint.config.mjs`:

```js
import next from '@tooling-configs/eslint-config/next';

export default [...next];
```

### Expo

```bash
pnpm add -D github:MasujimaRyohei/tooling-configs#path:packages/eslint-config eslint eslint-plugin-react eslint-plugin-react-hooks
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
- **Expo**: React + `__DEV__` global + ignores for `.expo`, `android`, `dist`, `ios`, `web-build`
