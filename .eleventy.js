module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("makeLowerCase", (string) => string?.toLowerCase());
  eleventyConfig.addFilter("shuffle", function (array) {
    if (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    } else {
      console.log("not array");
    }
  });
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addWatchTarget("./src/js/");
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
