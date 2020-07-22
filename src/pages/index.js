import React from 'react';
import { Link } from 'gatsby'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Layout from '../components/layout';
import useSiteMetadata from '../hooks/use-sitemetadata';

Amplify.configure(config)

export default () => {
  const {title, description} = useSiteMetadata();
  return (
    <>
      <Layout>
        <h1>{title}</h1>
        <p>{description}</p>
      </Layout>
    </>
  );
}
