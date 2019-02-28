import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';


const Navbar =()=> (

  <Segment inverted color = 'black' textAlign ='center'>
    <nav>
      <Button inverted color = 'green' as={Link} to="/">Home</Button>
      <Button inverted color = 'blue' as={Link} to="/tyler">Tyler</Button>
      <Button inverted color = 'purple' as={Link} to="/jordan">Jordan</Button>
      <Button inverted color = 'pink' as={Link} to="/judy">Judy</Button>
    </nav>
  </Segment>


)

export default Navbar;