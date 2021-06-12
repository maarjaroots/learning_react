const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]  //array, many types of loaders I can incorpurate with webpack, currently only babel-loader
    }
};