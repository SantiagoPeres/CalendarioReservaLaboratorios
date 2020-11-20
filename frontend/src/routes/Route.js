import React from 'react';
import { Redirect, Route as ReactRoute } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';
import AuthLayout from '../pages/_layouts/auth';

export default function Route({
  pageName = '',
  component: Component,
  ...rest
}) {
  const user = localStorage.getItem('username');

  const Layout = user ? DefaultLayout : AuthLayout;

  return (
    <ReactRoute
      {...rest}
      render={(props) => (
        <Layout pageName={pageName} {...props}>
          <Component />
        </Layout>
      )}
    />
  );
}
