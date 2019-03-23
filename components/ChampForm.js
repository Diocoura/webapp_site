import React, { Component } from 'react';
import axios from 'axios';

class ChampForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', moyenne:'0', avis:'0'};
    this.moyenne = 0;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('url a été transmis: ' + this.state.value);
    event.preventDefault();
  }

  loadmoyenne() {
    axios.get('main.go?url='+this.state.value)
    .then(response => {
      this.setState({moyenne: response.data.moyenne});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <div>
        <input type="submit" value="Click me !" />
        </div>
        <div>
        Note <input type="text" value={this.state.moyenne} />
        </div>
        <div>
        Avis <input type="text" value={this.state.avis} />
        </div>
      </form>

    );
  }
}




export default ChampForm;
