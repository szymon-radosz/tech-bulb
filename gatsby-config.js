module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    title: "tech-bulb.com - just few words about tech",
    contact: {
      email: "radoszszymon@gmail.com"
    },
    menuLinks: [
      {
        name: "About",
        link: "/about"
      },
      {
        name: "Blog",
        link: "/blog"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    }
  ]
};
