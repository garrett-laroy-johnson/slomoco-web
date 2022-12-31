module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addWatchTarget("./src/img/");
  eleventyConfig.addShortcode(
    "nunjucks_version",
    () => require("nunjucks/package.json").version
  );

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
