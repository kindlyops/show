import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { logout, isLoggedIn, getCurrentUser } from "../utils/auth"
import { Auth } from 'aws-amplify'
import { navigate } from '@reach/router'

const user = getCurrentUser()

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 5vw;

      @media (min-width: calc(550px + 10vw)) {
        padding-left: calc((100vw - 550px - 0.5rem) / 2);
        padding-right: calc((100vw - 550px - 0.5rem) / 2);
      }
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Kindly Ops Talk Show
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Main
      </NavLink>
      <NavLink to="/questions/" activeClassName="current-page">
        Ask a question
      </NavLink>
      {
        isLoggedIn() && (
          [
          <NavLink key="profile" to="/app/profile" activeClassName="current-page">{user.email}</NavLink>,
          <NavLink key="login" to="/app/login" activeClassName="current-page"
            onClick={
              () => Auth.signOut().then(logout(() => navigate('/app/login'))).catch(err => console.log('eror:', err))
            }
          >Sign Out</NavLink>
          ]
        ) || (
          <NavLink to="/app/login" activeClassName="current-page">Sign In</NavLink>
        )
      }
    </nav>
  </header>
);

export default Header;
