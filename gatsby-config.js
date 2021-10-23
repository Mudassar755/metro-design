module.exports = {
  siteMetadata: {
    title: `Metro Design | Kitchen & Bath`,
    description: `Kitchen and Bathroom remodeling is our specialty`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-transition-link`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
          layout: require.resolve(`${__dirname}/src/components/Layout`)
        }
   },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/M-favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
