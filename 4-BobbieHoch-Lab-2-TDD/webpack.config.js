const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: `${__dirname}/build`,
    filename: "bundle.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/css",
          to: "css", //Copies all files from above dest to build/assets
        },
        {
          //Wildcard is specified hence will copy all .html files
          from: "src/*.html",
          to: "[name].[ext]"
          // to: `${__dirname}/build/index.html`
        },
      ],
    }),
  ],
};
