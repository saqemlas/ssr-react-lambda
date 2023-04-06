module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        quotes: [ 'warn', 'single' ],
        indent: [ 'warn', 4, { FunctionExpression: { parameters: 'first' }, SwitchCase: 1 } ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        'eol-last': 'warn',
        'no-console': 'warn',
        'no-undef': 'off'
    }
}
