/**
 * 現状のコーディングルール一覧
 *
 * このファイルは tooling-configs で適用されている Prettier / ESLint / EditorConfig の
 * ルールを説明するリファレンスです。実際の適用は各 config package で行われます。
 */

// =============================================================================
// Prettier
// =============================================================================

export const prettierRules = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all' as const,
  printWidth: 100,
} as const;

/** Prettier ルールの説明 */
export const prettierRulesDescription = {
  semi: 'セミコロンを付ける',
  singleQuote: '文字列はシングルクォートを使用',
  trailingComma: '可能な箇所で末尾カンマを付ける（all）',
  printWidth: '1行の最大文字数',
};

// =============================================================================
// EditorConfig
// =============================================================================

export const editorConfigRules = {
  charset: 'utf-8',
  indentStyle: 'space',
  indentSize: 2,
  endOfLine: 'lf',
  insertFinalNewline: true,
  trimTrailingWhitespace: true,
} as const;

/** EditorConfig ルールの説明 */
export const editorConfigRulesDescription = {
  charset: '文字コード UTF-8',
  indentStyle: 'インデントはスペース',
  indentSize: 'インデント幅 2',
  endOfLine: '改行コード LF',
  insertFinalNewline: 'ファイル末尾に改行を挿入',
  trimTrailingWhitespace: '行末の空白を削除（*.md は除外）',
};

// =============================================================================
// ESLint - Base（全プロジェクト共通）
// =============================================================================

export const eslintBaseRules = {
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'simple-import-sort/imports': 'warn',
  'simple-import-sort/exports': 'warn',
} as const;

/** ESLint Base ルールの説明 */
export const eslintBaseRulesDescription = {
  'no-console': 'console.log は警告。console.warn / console.error は許可',
  'simple-import-sort/imports': 'import 文の並び順を統一（警告）',
  'simple-import-sort/exports': 'export 文の並び順を統一（警告）',
  // typescript-eslint 推奨ルールも含まれる（no-unused-vars など）
};

// =============================================================================
// ESLint - React
// =============================================================================

export const eslintReactRules = {
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  // + react.configs.recommended
  // + react-hooks.configs.recommended
} as const;

/** ESLint React ルールの説明 */
export const eslintReactRulesDescription = {
  'react/react-in-jsx-scope': 'React 17+ の新 JSX 変換のため不要（オフ）',
  'react/prop-types': 'TypeScript で型を管理するためオフ',
};

// =============================================================================
// ESLint - Next.js
// =============================================================================

/** Next.js は React に加え、以下を適用 */
export const eslintNextAdditionalRules = [
  '@next/next 推奨ルール',
  'Core Web Vitals ルール',
  'Image / Link / Script の適切な使用',
] as const;

// =============================================================================
// ルールの思想
// =============================================================================

/**
 * フォーマット → Prettier
 * 見た目（セミコロン、クォート、改行など）は Prettier に一元化
 */
export const formattingTool = 'prettier' as const;

/**
 * 品質チェック → ESLint
 * 未使用変数、潜在的なバグ、import 順序、フレームワークのベストプラクティス
 */
export const qualityTool = 'eslint' as const;

/**
 * 方針: 厳しすぎず、実用的に
 * - no-console は警告（デバッグを許容）
 * - import sort は警告（修正しやすくリスク低）
 * - プロジェクトごとに厳格化可能
 */
export const rulePhilosophy = 'practical-over-strict' as const;
