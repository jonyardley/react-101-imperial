import React, { Component } from 'react';
import Form from './form.js';
import ItemList from './item-list.js';

const url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes/10';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => {
        response.json().then(items => this.setState({items: items, loading: false}));
      });
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
        {
          this.state.loading &&
            <p>Loading Data...</p>
        }
      </div>
    );
  }
};
