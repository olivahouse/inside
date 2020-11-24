import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { PostMatching } from '../modules';

const Component = () => <PostMatching />;

Component.displayName = 'Home';

// eslint-disable-next-line import/no-default-export
export default withAuthenticationRequired(Component);
