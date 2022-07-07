module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `roboto\:100,100i,300,300i,400,400i,500,700`
          ],
          display: 'swap'
        }
    },
    {
    resolve: `gatsby-plugin-react-svg`,
    options: {
      rule: {
        include: /images/ // See below to configure properly
      }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
