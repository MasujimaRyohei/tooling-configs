# @tooling-configs/prettier-config

Shared Prettier configuration for JavaScript/TypeScript projects.

## Usage

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

Or create a `.prettierrc` file:

```json
"@tooling-configs/prettier-config"
```

### Options

| Option          | Value  |
| --------------- | ------ |
| `semi`          | `true` |
| `singleQuote`   | `true` |
| `trailingComma` | `all`  |
| `printWidth`    | `100`  |

### Extending

You can extend and override using a `.prettierrc.js`:

```js
module.exports = {
  ...require('@tooling-configs/prettier-config'),
  printWidth: 80,
};
```
