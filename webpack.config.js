const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new FaviconsWebpackPlugin("src/favicon.ico"),
  ],
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
        test: /\.(eot|png|svg|ttf|woff|woff2|jpg|gif|ico)$/,
        use: {
          loader: "file-loader",
        },
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attributes: {
                list: [
                  "...",
                  {
                    tag: "meta",
                    attribute: "content",
                    type: "src",
                    /**
                     * @docs https://github.com/webpack-contrib/html-loader#list
                     */
                    filter: (_tag, _attribute, attributes, _resourcePath) => {
                      if (
                        attributes.property === "og:image" ||
                        attributes.property === "twitter:image"
                      ) {
                        return true;
                      }
                      return false;
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
