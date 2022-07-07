module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `roboto`
          ],
          display: 'swap'
        }
    }
  ],
}
