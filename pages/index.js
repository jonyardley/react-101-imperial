import React, { Component } from 'react';

import Header from '../components/header.js';
import ItemList from '../components/item-list.js';
import Form from '../components/form.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jon Yardley",
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    const url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes/5';

    fetch(url)
    .then(response => response.json())
    .then(items => this.setState({ items: items, loading: false }))
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
        {
          this.state.loading && <p>Loading...</p>
        }
        <ItemList items={this.state.items} />
      </main>
    );
  }
};
