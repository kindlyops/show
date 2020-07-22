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
        <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
        <Link to="/app/login">Sign In</Link><br />
        <Link to="/app/home">Home</Link><br />
        <Link to="/app/profile">Your profile</Link>
      </Layout>
    </>
  );
}
