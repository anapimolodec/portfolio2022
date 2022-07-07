module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
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
    }
  ],
}
