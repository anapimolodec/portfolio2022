module.exports = {
  siteMetadata: {
    siteUrl: `http://localhost:8000/`,
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
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    
  ],
}
