module.exports = {
    env: {
      node: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
    },
    extends: 'standard',
    rules: {
      camelcase: [0],
      semi: [2, 'always'],
      'linebreak-style': [0, 'windows'],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      }],
      'no-console': [0],
      'prefer-destructuring': ['error', {
        object: false,
      }, {
        enforceForRenamedProperties: false,
      }],
    },
  };  