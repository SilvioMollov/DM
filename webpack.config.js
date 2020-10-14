const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    host: "0.0.0.0",
    useLocalIp: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2?)$/,
      //   use: {
      //     loader: "file-loader",
      //   },
      // },
      {
        test: /\.(eot|png|svg|ttf|woff|woff2|jpg|gif|ico)$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
};
