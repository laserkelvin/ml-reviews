module.exports = {
  pathPrefix: `/ml-reviews`,
  siteMetadata: {
    title: `ML Reviews`,
    author: `Kelvin Lee`,
    description: `A Zettelkasten for machine learning concepts and methods.`,
    social: [
      {
        name: `twitter`,
        url: `https://www.twitter.com/cmmmsubmm`
      },
      {
        name: `github`,
        url: `https://github.com/laserkelvin`
      },
      {
        name: `website`,
        url: `https://laserkelvin.github.io`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")]
      },
    },
  ],
};
