import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import axios from 'axios';  

class Form extends React.Component {
 
    render() {

      return(
        <Container textAlign = 'center'>
          <h1>Task</h1>
          <Button>Create</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>        
        </Container>
      )
    }

  }


export default Form;