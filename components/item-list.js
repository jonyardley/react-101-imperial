import React from 'react';
import Item from './item.js';

export default ({items}) => (
  <ul>
    {
      items.map((item, index) =>
        <Item item={item} key={`li-${item}-${index}`} />
      )
    }
  </ul>
);
