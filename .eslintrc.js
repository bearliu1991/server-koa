module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended'],
  env: {
    commonjs: true,
    node: true,
    es6: true,
  },
  rules: {
    'generator-star-spacing': [0],
    'consistent-return': [0],
    'no-console': [0],
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
};
