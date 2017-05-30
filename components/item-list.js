import React from 'react';

export default ({items = []}) => (
  <ul>
    {
      items.map((item, index) => <li key={`li-${item}-${index}`}>{item}</li>)
    }
  </ul>
);
