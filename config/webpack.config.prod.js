const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "../build")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        // web font loader
        test: /\.(woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../dist/',
              name: '../src/assets/webfonts/[name].[ext]',
            },
          },
        ],
      },
      {
        // images loader
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../dist/',
              name: '../src/assets/images/s_images/[name].[ext]',
            },
          },
          {
            loader: 'file-loader',
            options: {
              publicPath: '../dist/',
              name: '../src/assets/images/p_images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      '@style': path.resolve(__dirname, '../src/style'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@containers': path.resolve(__dirname, '../src/containers'),
      '@images': path.resolve(__dirname, '../src/assets/images'),
      '@webfont': path.resolve(__dirname, '../src/assets/webfont')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new CleanWebpackPlugin()
  ],
  performance: {  // build시 내보내는 파일의 권장 사이즈(초과시 경고문 표시함) 단위: 바이트(b)
    maxAssetSize: 1048576 // 1024kb(1mb) 이하의 파일만 내보내도록 권장.
  }
};