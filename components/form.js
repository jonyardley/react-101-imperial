import React, { Component } from 'react';

export default class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  updateValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleClick = () => {
    this.props.addItem(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={e => this.updateValue(e)}/>
        <button className="primary-button" onClick={() => this.handleClick()}>Add</button>
      </div>
    );
  }
};
