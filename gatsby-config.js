module.exports = {
  siteMetadata: {
    siteUrl: `https://anapimolodec.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-aiaru`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#E3EDEF`,
        theme_color:`#E7B9AA`,
        icon: `src/images/icon.png`,
      }
    },

    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `roboto\:100,100i,300,300i,400,400i,500,700`,
            `caveat\:500`
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
