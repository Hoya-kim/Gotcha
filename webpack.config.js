const path = require("path");
const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

/* -------------------------------------------------------------------------- */

module.exports = {
  target: "web",
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          // "style-loader",  // for production
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      stage: 3,
                      features: {
                        "nesting-rules": true,
                      },
                      autoprefixer: { grid: true },
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.{png,jpe?g,gif,svg,webp,bmp}$/i,
        exclude: /node_modules/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      linkType: false,
      filename: "css/style.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/images'),
          to: path.join(
            __dirname,
            `dist/assets`
            // `${isDevelopment ? paths.dist : paths.build}/assets`
          ),
        },
      ],
    }),
  ],
};
