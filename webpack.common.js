const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const makeJsPath = (...pathComponents) => {
  return path.resolve(".", "src", "main", "resources", "js", ...pathComponents);
};

const makeJsPagePath = (...pathComponents) => {
  return makeJsPath("pages", ...pathComponents);
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: {
              loader: "css-loader",
            },
            scss: {
              loader: "sass-loader",
            },
          },
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".vue", ".scss"],
    alias: {
      "~": path.resolve(__dirname, "src", "main", "resources", "js"),
      "^": path.resolve(
        __dirname,
        "src",
        "main",
        "resources",
        "js",
        "ui",
        "common"
      ),
      "&": path.resolve(
        __dirname,
        "src",
        "main",
        "resources",
        "js",
        "ui",
        "pages"
      ),
      "@": path.resolve(__dirname, "src", "main", "resources", "sass"),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  plugins: [new VueLoaderPlugin()],
  entry: {
    app: makeJsPath("app.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "src", "main", "resources", "static", "js"),
  },
};
