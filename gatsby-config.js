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
        region: process.env.AWS_DEFAULT_REGION,
        userPoolId: process.env.AWS_POOL_ID,
        userPoolWebClientId: process.env.AWS_WEB_CLIENT_ID
      }
    },
  ],
};
