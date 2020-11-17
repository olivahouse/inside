import React from 'react';

import { AuthenticationProvider } from './src/modules/authentication';

export const wrapRootElement = ({ element }) => (
  <AuthenticationProvider>{element}</AuthenticationProvider>
);
