import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react'
import Navbar from './Navbar';
class Home extends React.Component {

  render() {

    return(

      <Fragment>
        <Segment 
          textAlign ='center'
          inverted color = 'green'
          size = 'massive'
          >
            <h1>
              Welcome to the Minion Management System
            </h1>
        </Segment>
           <Navbar/>
        </Fragment>

    );
  }
}  
export default Home;