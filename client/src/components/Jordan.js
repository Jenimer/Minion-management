import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import Navbar from './Navbar';

  const Jordan = () => (
    <Fragment>
    <Segment
      size = 'massive'
      textAlign = 'center'
      inverted color = 'purple'
    >
      <h1>
        Jordan's to do list
      </h1>
    </Segment>
    <Navbar/>
    </Fragment>
  );

export default Jordan;