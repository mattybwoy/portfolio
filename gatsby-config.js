/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Matthew Lock`,
    //siteUrl: "Anonymous",
    social: [{
      name: "github",
      url: "https://github.com/mattybwoy"
    }]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-theme-blog",
      options: {
        preset: "@theme-ui/preset-tosh",
        prismPreset: "prism-okaidia",
      },
    }
  ],
}
