import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import Form from './Form';
import Navbar from './Navbar';
  class Tyler extends React.Component { 
    
    
    render () {
      return (
        <Container fluid>
          <Segment
            size = 'massive'
            textAlign = 'center'
            inverted color = 'blue'
          >

            <h1>
              Tyler's to do list
            </h1>

          </Segment>
          <Navbar/>
          <div>
            <Form />
          </div>
        </Container>  
      );
    }  
  }

export default Tyler;