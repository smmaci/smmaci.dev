export default function (eleventyConfig) {
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
    "ttf",
    "woff",
    "woff2",
  ])
  eleventyConfig.addPassthroughCopy("public")
  eleventyConfig.addPassthroughCopy("src/script.js")

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build",
    },
  }
}
