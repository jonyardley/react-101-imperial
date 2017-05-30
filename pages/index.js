// pages/index.js
import Header from '../components/header.js';
import ItemList from '../components/item-list.js';

const data = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 4',
  'Item 4',
  'Item 4',
  'Item 4'
];

export default () => (
  <main>
    <Header name="World" />
    <ItemList items={data} />
  </main>
);
