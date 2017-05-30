// components/item-list.js
import React from 'react';
import Item from './item';

const data = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8'
];

export default () => (
  <div>
    <p>My Items</p>
    <ul>
      {
        data.map(i => <Item item={i} key={`li-${i}`} />)
      }
    </ul>
  </div>
);
