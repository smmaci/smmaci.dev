const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");
const Image = require("@11ty/eleventy-img")

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2"
  ]);
  eleventyConfig.addPassthroughCopy("public");

  /* From: https://github.com/artstorm/eleventy-plugin-seo
  
  Adds SEO settings to the top of all pages
  The "glitch-default" bit allows someone to set the url in seo.json while
  still letting it have a proper glitch.me address via PROJECT_DOMAIN
  */
  const seo = require("./src/seo.json");
  eleventyConfig.addPlugin(pluginSEO, seo);

  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

    // --- START, eleventy-img
    async function imageShortcode(src, alt, sizes) {
      let metadata = await Image(src, {
        widths: [300, 600],
        formats: ["avif", "jpeg"],
        urlPath: "/images/",
        outputDir: "./build/images"
      });
    
      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };
    
      // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
      return Image.generateHTML(metadata, imageAttributes);
    }
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);
    // --- END, eleventy-img

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };
};
