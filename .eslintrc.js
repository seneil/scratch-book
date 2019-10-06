module.exports = {
  extends: 'airbnb',
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: 'config/webpack.development.js'
      }
    }
  },
  globals: {
    window: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        'beforeSelfClosing': 'never'
      }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
  }
};
