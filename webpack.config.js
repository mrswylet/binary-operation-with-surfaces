let glob = require("glob");
let entry = __dirname + "/src/index.js";
let outputPath = __dirname + "/dist/";
let devtool = "s";

module.exports = (env, argv) => {
  if (argv.TESTBUILD) {
    entry = glob.sync(__dirname + "/test/**/*.test.js");
    outputPath = __dirname + "/test-dist/";
    devtool = "source-map";
  }

  return {
    entry: entry,
    output: {
      path: outputPath,
    },
    devtool: devtool,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  };
};
