module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'react-native/no-inline-styles': 'off',
        'comma-dangle': 'off'
      }
    }
  ]
};
