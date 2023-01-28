module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addWatchTarget("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/texts/");
  eleventyConfig.addWatchTarget("./src/texts/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/audio/");
  eleventyConfig.addWatchTarget("./src/audio/");
  eleventyConfig.addShortcode(
    "nunjucks_version",
    () => require("nunjucks/package.json").version
  );

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
