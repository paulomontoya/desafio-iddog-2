const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]___[hash:base64:5]"
  },
  webpack(config, { dev }) {
    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        exclude: ["/node_modules/", "/.next/", "/out/"],
        enforce: "pre",
        options: {
          emitWarning: true
        }
      });
    }
    return config;
  }
});
