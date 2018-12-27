module.exports = api => {
  api.cache(true);

  return {
    "presets": [
      [
        "@babel/env",
        {
          "useBuiltIns": "usage",
          "modules": "commonjs",
          targets: { "node": "current" }
        }
      ]
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  }
}
