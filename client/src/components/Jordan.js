import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import Navbar from './Navbar';
import Form from './Form';

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
    <Form/>
    </Fragment>
  );

export default Jordan;