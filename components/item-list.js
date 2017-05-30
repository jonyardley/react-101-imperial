// components/item-list.js
import React from 'react';

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

const renderListItem = (item) => (
  <li key={`li-${item}`}>{item}</li>
);

export default () => (
  <ul>
    {
      data.map(i => renderListItem(i))
    }
  </ul>
);
