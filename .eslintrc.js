module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Side effect imports.
              ['^\\u0000'],
              // Absolute imports. Ones that start with `react` will come first
              ['^react', '^@?\\w'],
              // Absolute imports from this project, which start with a `/`
              ['^/\\w'],
              // Relative imports
              ['^\\.'],
              // Apollo type imports, then relative type imports
              ['^/apollo/schema', '^./\\w+\\.(types)$'],
              // Relative styles
              ['^./\\w+\\.(styles)$'],
            ],
          },
        ],
      },
    },
  ],
};
