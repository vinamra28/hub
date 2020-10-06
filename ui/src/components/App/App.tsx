import React from 'react';
import { observer } from 'mobx-react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import CatalogFilter from '../CatalogFilter/CatalogFilter';
import KindFilter from '../KindFilter/KindFilter';
import SortByFilter from '../SortByFilter/SortByFilter';
import { IResourceStore } from '../../store/resources';
import { Text, TextVariants } from '@patternfly/react-core';

interface store {
  store: IResourceStore;
}

const App = observer(({ store }: store) => (
  <div className="App">
    <b
      style={{
        fontSize: '1.1em',
        verticalAlign: '-0.2em',
        color: '#484848',
        marginLeft: '3em',
        backgroundColor: 'white'
      }}
    >
      Sort
    </b>
    <SortByFilter store={store} />
    <Text
      component={TextVariants.h1}
      style={{
        fontWeight: 'bold',
        margin: '4.5em',
        fontSize: '1.1em',
        color: '#484848',
        marginBottom: '-1.1em',
        marginTop: '5em'
      }}
    >
      Refine By:
    </Text>
    <CatalogFilter store={store.catalogStore} />
    <KindFilter store={store.kindStore} />
    <CategoryFilter store={store.categoryStore} />
  </div>
));

export default App;
