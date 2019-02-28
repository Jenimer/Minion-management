import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import Navbar from './Navbar';
import Form from './Form';

  const Judy = () => (
    <Fragment>
    <Segment
      size = 'massive'
      textAlign = 'center'
      inverted color = 'pink'
    >
      <h1>
        Judy's to do list
      </h1>
    </Segment>
    <Navbar/>
    <Form/>
    </Fragment>
  );

export default Judy;