import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import favicon from '../../static/favicon-96x96.png';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 14px;
            line-height: 1.4;

            @media (min-width: calc(550px + 10vw)) {
              font-size: 18px;
            }

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }

          .socialButton {
            border-radius: 2px;
            height: 40px;
            margin-bottom: 15px;
            padding: 2px;
            text-align: left;
            width: 100%;
            background: #4285F4;
            color: #FFF;
            font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
            font-weight: 500;
        }
        .social-logo {
          display: inline-block;
          height:80%;
          margin-right: 12px;
          padding: 9px;
          text-align:center;
          vertical-align: middle;
          background: #FFF;
          border-radius: 2px;
      }

        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel='shortcut icon' type='image/png' href={favicon} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
