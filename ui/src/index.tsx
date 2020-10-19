import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import { KindStore } from './store/kind';
import { CatalogStore } from './store/catalog';
import { ResourceStore } from './store/resources';
import { CategoryStore } from './store/category';
import { Hub } from './api/index';

const api = new Hub();

const Store = ResourceStore.create(
  {},
  {
    api,
    kindStore: KindStore.create({}),
    catalogStore: CatalogStore.create({}),
    categoryStore: CategoryStore.create({}, { api })
  }
);

// setInterval(function () {
//   console.log(Store.list);
// }, 6000);

ReactDOM.render(
  <Provider>
    <App store={Store} />,
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
