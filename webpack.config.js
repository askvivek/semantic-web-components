const path = require("path");

module.exports = {
  entry: "./index.ts",
  output: {
    filename: "focusbrand-web-components.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "focusbrand-web-components",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
