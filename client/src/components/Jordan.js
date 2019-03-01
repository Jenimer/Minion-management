import React from 'react';
import { Segment, Container, Button, Header } from 'semantic-ui-react';
import Form from './Form';
import Navbar from './Navbar';
import axios from 'axios';


  class Jordan extends React.Component { 
    state = { tasks: [], showForm: false }

    show() {
      let { tasks } = this.state;
      return(
        <ul>
          { tasks.map( t => 
           <li key={t.id}>
             {t.name}
           </li> 
         ) 
       }
        </ul>
      )
    }

    form() {
      return <Form submit={this.submit}/>
    }
    
    submit = (task) => {
      const { tasks } = this.state
      axios.post(`/api/tasks`, { task } )
        .then(res => this.setState({ tasks: [res.data, ...tasks ], showForm: false}) )
    }

    toggleForm = () => {
      this.setState(state => {
        return { showForm: !state.showForm }
      })
    }

    render () {
      const { showForm } = this.state;
      return (
        <Container fluid>
          <Segment
            size = 'massive'
            textAlign = 'center'
            inverted 
          >

            <Header as='h1'>
              Jordan's to do list
            </Header>

          <Navbar/>
          </Segment>
          <Container textAlign='center'>
            <Button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show'} form</Button>
            { showForm ? this.form() : this.show() }
          </Container>
        </Container>  
      );
    }  
  }

export default Jordan;