import React from 'react';
import Layout from '../components/layout';
import useSiteMetadata from '../hooks/use-sitemetadata';

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
};
