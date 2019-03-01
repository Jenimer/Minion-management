import React, { Fragment } from 'react';
import { Segment, Header} from 'semantic-ui-react'
import Navbar from './Navbar';
class Home extends React.Component {

  render() {

    return(

      <Fragment>
        <Segment inverted size='massive'>
            <Header 
              as='h1'
              textAlign='center'
              
            >
              Welcome to the Minion Management System
            </Header>
           <Navbar/>
          </Segment>
        </Fragment>

    );
  }
}  
export default Home;