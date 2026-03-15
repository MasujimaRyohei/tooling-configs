# Setup Guide

This guide walks through using the shared tooling configs in a new project. Copy and paste the commands and config snippets as needed.

## Prerequisites

- Node.js 18+
- pnpm

```bash
# Install pnpm if needed
npm install -g pnpm
```

---

## 1. Prettier

### Install

```bash
pnpm add -D @tooling-configs/prettier-config prettier
```

### Configure

Add to your `package.json`:

```json
{
  "prettier": "@tooling-configs/prettier-config"
}
```

### Scripts (optional)

```json
{
  "scripts": {
    "format": "prettier --write \"**/*.{js,ts,tsx,json,md}\"",
    "format:check": "prettier --check \"**/*.{js,ts,tsx,json,md}\""
  }
}
```

---

## 2. ESLint

### Base (TypeScript / Node)

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

### Scripts (optional)

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

---

## 3. gitignore Template

Copy the template that matches your project:

```bash
# Node / generic
cp path/to/tooling-configs/templates/gitignore/node.gitignore .gitignore

# React
cp path/to/tooling-configs/templates/gitignore/react.gitignore .gitignore

# Next.js
cp path/to/tooling-configs/templates/gitignore/next.gitignore .gitignore

# Expo
cp path/to/tooling-configs/templates/gitignore/expo.gitignore .gitignore
```

Or merge with an existing `.gitignore`:

```bash
cat path/to/tooling-configs/templates/gitignore/next.gitignore >> .gitignore
```

---

## 4. EditorConfig (optional)

Copy the root `.editorconfig` from this repo to keep editor settings consistent:

```bash
cp path/to/tooling-configs/.editorconfig .editorconfig
```

---

## Using as a Local Package

If this repo lives alongside your app (e.g. in a monorepo), use workspace protocol:

```json
{
  "devDependencies": {
    "@tooling-configs/prettier-config": "workspace:*",
    "@tooling-configs/eslint-config": "workspace:*"
  }
}
```

---

## Using from npm (when published)

```bash
pnpm add -D @tooling-configs/prettier-config @tooling-configs/eslint-config
```

Same config usage as above.
