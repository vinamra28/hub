import React from 'react';
import { useObserver } from 'mobx-react';
import { GridItem, Grid, SplitItem, Split, Text, TextVariants } from '@patternfly/react-core';
import SortByFilter from '../SortByFilter/SortByFilter';
import { IResourceStore } from '../../store/resources';
import CatalogFilter from '../CatalogFilter/CatalogFilter';
import KindFilter from '../KindFilter/KindFilter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import "./LeftPane.css";

interface store {
  store: IResourceStore;
}

const LeftPane: React.FC<store> = (props: store) => {
  const store = props.store;
  return useObserver(() => (
    <div>
      <Grid sm={6} md={4} lg={3} xl2={1} style={{ marginLeft: '3em', marginTop: '2em' }}>
        <GridItem span={1}>
          <Split>
            <SplitItem>
              <Text component={TextVariants.h1} style={{ fontWeight: 'bold', width: '3em', marginTop: '0.3em' }}>
                Sort
              </Text>
            </SplitItem>
            <SplitItem>
              <SortByFilter store={store} />
            </SplitItem>
          </Split>
        </GridItem>
      </Grid>

      <Grid
        sm={6}
        md={4}
        lg={3}
        xl2={1}
        style={{ marginBottom: '-3em', marginLeft: '3em', marginTop: '2em' }}
      >
        <GridItem span={1} style={{ width: '10em', marginBottom: '2em' }}>
          <Text component={TextVariants.h1} style={{ fontWeight: 'bold' }}>
            Refined By
          </Text>
        </GridItem>
      </Grid>

      <CatalogFilter store={store.catalogStore} />
      <KindFilter store={store.kindStore} />
      <CategoryFilter store={store.categoryStore} />
    </div>
  ));
};

export default LeftPane;
