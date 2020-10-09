import React from 'react';
import { Message } from 'semantic-ui-react';

const Error = () => {
  return (
    <Message negative>
      <Message.Header>We're sorry something has gone wrong</Message.Header>
      <p>Please try searching again ...</p>
    </Message>
  )
}

export default Error;