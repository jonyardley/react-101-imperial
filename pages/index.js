import React, { Component } from 'react';

import Header from '../components/header.js';
import ItemList from '../components/item-list.js';
import Form from '../components/form.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name: "Jon"
    }
  }

  addItem = item => {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    });
  }

  render() {
    return (
      <main>
        <Header name={this.state.name} />
        <Form addItem={this.addItem} />
        <ItemList items={this.state.items} />
      </main>
    );
  }
}
