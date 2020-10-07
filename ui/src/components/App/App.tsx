import React from 'react';
import { observer } from 'mobx-react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import CatalogFilter from '../CatalogFilter/CatalogFilter';
import KindFilter from '../KindFilter/KindFilter';
import SortByFilter from '../SortByFilter/SortByFilter';
import { IResourceStore } from '../../store/resources';
import { Text, TextVariants, Grid, GridItem, Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import '@patternfly/react-core/dist/styles/base.css';

interface store {
  store: IResourceStore;
}

const App = observer(({ store }: store) => (
  <div className="App">
    <Grid
      hasGutter
      style={{
        marginTop: '5em'
      }}
    >
      <GridItem span={1} rowSpan={3}>
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
      </GridItem>
      <GridItem span={1}>
        <SortByFilter store={store} />
      </GridItem>
      <Grid rows={2} rowSpan={2}>
        <GridItem rowSpan={2}>
          <Text
            component={TextVariants.h1}
            style={{
              fontWeight: 'bold',
              margin: '4.5em',
              fontSize: '1.1em',
              color: '#484848',
              marginBottom: '-2.0em',
              marginTop: '5em'
            }}
          >
            Refine By:
          </Text>
        </GridItem>
        <GridItem span={1} rowSpan={2}>
          <Button variant="plain" aria-label="Clear" onClick={store.clearAll}>
            <TimesIcon />
          </Button>
        </GridItem>
      </Grid>
      <CatalogFilter store={store.catalogStore} />
      <KindFilter store={store.kindStore} />
      <CategoryFilter store={store.categoryStore} />
    </Grid>
  </div>
));

export default App;
