var path = require("path");

module.exports = {
    entry: "./src/index.js",  //entry file

    // bundled JS file into ./dist/bundle.js - final packaged JavaScript
    output: {  
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },

    //list of loarders to run on specified modules
    module: {
        rules: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]  //array, many types of loaders I can incorpurate with webpack, currently only babel-loader
    },

    // source map is a file that maps bundle to the original source files
    //devtool: "#source-map"
};