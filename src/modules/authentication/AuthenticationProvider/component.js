import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';

const onRedirectCallback = appState => {
  // Use Gatsby's navigate method to replace the url
  navigate(appState?.returnTo || '/', { replace: true });
};

export const Component = ({ children }) => (
  <Auth0Provider
    clientId={process.env.AUTH_0_CLIENT_ID}
    domain={process.env.AUTH_0_DOMAIN}
    onRedirectCallback={onRedirectCallback}
    redirectUri={console.log(window.location.origin) || window.location.origin}
  >
    {children}
  </Auth0Provider>
);

Component.displayName = 'AuthenticationProvider';
