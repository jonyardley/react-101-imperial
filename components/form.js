import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleClick = () => {
    this.props.addItem(this.state.inputValue);
    this.setState({ inputValue: '' })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>Add item</button>
      </div>
    );
  }
};
