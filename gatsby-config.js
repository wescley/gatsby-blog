/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Wescley Fontes`,
    description: `A blog about technology and trips`,
    author: `@wescleyfontes`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
