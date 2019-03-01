import React from 'react';
import { Button } from 'semantic-ui-react';


class Form extends React.Component {
  defaultValues = { name: '' }
  state = { ...this.defaultValues };

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const task = { ...this.state }
    this.props.submit(task)
    this.setState({ ...this.defaultValues })
  };

  handleChange = (e) => {
    const { target: {name, value}} = e;
    this.setState({ [name]: value })

  };

  
    render() {
      const { name } = this.state;
      return(
        <form onSubmit={this.handleSubmit} >
          <input
            name='name'
            placeholder='task'
            value={name}
            onChange={this.handleChange}
            required
          />

        
          <Button>Add</Button>        
        </form>
      )
    }

  }


export default Form;