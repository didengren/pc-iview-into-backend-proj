let plugins = [];
plugins.push([
  "import",
  {
    libraryName: "view-design",
    libraryDirectory: "src/components"
  }
]);
if (process.env.NODE_ENV !== "local")
  plugins.push(["transform-remove-console", { exclude: [] }]); // exclude: ["error", "warn"]

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: plugins
};
