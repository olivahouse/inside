import React from 'react';

import { AuthenticationProvider } from './src/modules/authentication';
import { Layout } from './src/modules/layout';

export const wrapRootElement = ({ element }) => (
  <AuthenticationProvider>{element}</AuthenticationProvider>
);

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
