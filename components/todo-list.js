import React, { Component } from 'react';
import Form from './form.js';
import ItemList from './item-list.js';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem (newItem) {
    this.setState({
      items: [
        ...this.state.items,
        newItem
      ]
    });
  }

  render() {
    return (
      <div>
        <Form addItem={newItem => this.addItem(newItem)}/>
        <ItemList items={this.state.items}/>
      </div>
    );
  }
};
