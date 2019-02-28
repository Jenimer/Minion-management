import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';


const Navbar =()=> (

  <Segment>
    <nav>
      <Link to="/">| Home </Link>
      <Link to="/tyler">| Tyler </Link>
      <Link to="/jordan">| Jordan </Link>
      <Link to="/judy">| Judy |</Link>
    </nav>
  </Segment>


)

export default Navbar;