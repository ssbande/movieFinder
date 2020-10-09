import React from 'react';
import { Message } from 'semantic-ui-react';

const NoData = () => {
  return <div style={{ paddingTop: 20 }}>
    <Message size='tiny' color='yellow'>No data found ...</Message>
  </div>
}

export default NoData;