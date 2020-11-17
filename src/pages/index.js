import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Component = () => {
  const { user } = useAuth0();

  console.log(user);
  return <div>Hello world!</div>;
};

Component.displayName = 'Home';

// eslint-disable-next-line import/no-default-export
export default withAuthenticationRequired(Component);
