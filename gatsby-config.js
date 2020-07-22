module.exports = {
  siteMetadata: {
    title: 'Kindly Ops Talk Show',
    description:
      'The Kindly Ops Talk show. Watch Live and Ask Questions.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-theme-amplify-cognito',
      options: {
        region: process.env.APP_REGION,
        userPoolId: process.env.APP_POOL_ID,
        userPoolWebClientId: process.env.APP_WEB_CLIENT_ID
      }
    },
  ],
};
