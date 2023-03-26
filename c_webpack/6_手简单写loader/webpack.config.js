const path = require("path")

/**@type {import('webpack'.Configuration)} */
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, "./loaders/chonLoader.js"),
          //loader 里的 options.name 中的 name
          options: {
            name: "yangyang",
          },
        },
      },
    ],
  },
}
