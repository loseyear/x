module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "parser": "babel-eslint",
  "rules": {
    "no-console": ["off"],
    "semi": ["error", "never"]
  }
}

