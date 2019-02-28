import React from 'react';
import axios from 'axios';

class Task extends React.Component {
  state = { task: []}
  
  componentDidMount(){
    axios.get(`/api/tasks/$this.props.match.params.id`)
      .then(res => this.setState({task: res.data}))
  }

  render(){
    const { task: {name, done}} = this.setState;
    return(
      <div>
        <h1>{name}</h1>
        <h1>{done}</h1>
      </div>
    );
  }
}

export default Task;