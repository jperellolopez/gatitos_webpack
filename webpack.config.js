const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var WebpackObfuscator = require("webpack-obfuscator");

module.exports = {
  mode: "production",
  entry: {
    index: './src/js/all.js',
    app: './src/js/application.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Gatitos",
      template: "src/index.html",
    }),
    new WebpackObfuscator(
      {
        rotateStringArray: true,
      },
      ['main.bundle.js']
    ),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
