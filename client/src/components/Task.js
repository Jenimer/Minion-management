import React from 'react';
import axios from 'axios';
import Form from './Form';
import { Button } from 'semantic-ui-react';

class Task extends React.Component {
  state = { task: {}, edit: false }
  
  componentDidMount() {
    axios.get(`/api/tasks/${this.props.match.params.id}`)
      .then(res => this.setState({ task: res.data}))
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit}
    });
  }

  submit = (task) => {
    axios.put(`/api/tasks/${this.props.match.params.id}`, { task })
      .then( res => this.setState({ task: res.data, edit: false }));
  }

  show(){
    const { task: { name } } = this.state;
      return(
        <div>
          <h1>{name}</h1>
        </div>
      )
  }

  edit() {
    return <Form {...this.state.task} submit={this.submit} />
  }
  
  render(){
    const { edit } = this.state;
    return(
      <div>
        { edit ? this.edit() : this.show() }
        <Button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit'}</Button>
      </div>
    )
  }
}

export default Task;