const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  output: {
    filename: "app.bundle.js",
  },
  plugins: [
    // Se crea una instancia del plugin
    new HtmlWebpackPlugin(),
  ],
};
