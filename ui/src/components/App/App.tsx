import React from 'react';
import { observer } from 'mobx-react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import CatalogFilter from '../CatalogFilter/CatalogFilter';
import KindFilter from '../KindFilter/KindFilter';
import SortByFilter from '../SortByFilter/SortByFilter';
import { IResourceStore } from '../../store/resources';
import { Text, TextVariants, Grid, GridItem, Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';
import LeftPane from '../LeftPane/LeftPane';
import '@patternfly/react-core/dist/styles/base.css';

interface store {
  store: IResourceStore;
}

const App = observer(({ store }: store) => (
  // <Grid rowSpan={12}>
  //   <Grid hasGutter rowSpan={2}>
  //     <GridItem span={1} rowSpan={5}>
  //       <Text
  //         style={{
  //           fontWeight: 'bold',
  //           fontSize: '1.1em',
  //           color: '#484848',
  //           verticalAlign: '-0.2em',
  //           marginLeft: '3em',
  //           backgroundColor: 'white'
  //         }}
  //       >
  //         Sort
  //       </Text>
  //     </GridItem>
  //     <GridItem span={1} rowSpan={4}>
  //       <SortByFilter store={store} />
  //     </GridItem>
  //   </Grid>
  //   <Grid hasGutter>
  //     <GridItem span={2} rowSpan={3}>
  // <Text
  //   component={TextVariants.h1}
  //   style={{
  //     fontWeight: 'bold',
  //     fontSize: '1.1em',
  //     color: '#484848',
  //     marginBottom: '-1.0em',
  //     marginLeft: '3em'
  //     // marginTop: '5em'
  //   }}
  // >
  //   Refine By:
  // </Text>
  //     </GridItem>
  //     <GridItem span={2} rowSpan={3}>
  //       <Button
  //         variant="plain"
  //         aria-label="Clear"
  //         onClick={store.clearAll}
  //         style={
  //           {
  //             // paddingTop: '5em'
  //           }
  //         }
  //       >
  //         <TimesIcon />
  //       </Button>
  //     </GridItem>
  //   </Grid>
  //   <Grid hasGutter>
  //     <GridItem span={3} rowSpan={3}>
  //       <CatalogFilter store={store.catalogStore} />
  //     </GridItem>
  //   </Grid>
  //   <Grid hasGutter>
  //     <GridItem span={3} rowSpan={3}>
  //       <KindFilter store={store.kindStore} />
  //     </GridItem>
  //   </Grid>
  //   <Grid hasGutter>
  //     <GridItem span={3} rowSpan={3}>
  //       <CategoryFilter store={store.categoryStore} />
  //     </GridItem>
  //   </Grid>
  // </Grid>
  <div>
    {/* <SortByFilter store={store} />
    <Text
      component={TextVariants.h1}
      style={{
        fontWeight: 'bold',
        fontSize: '1.1em',
        color: '#484848',
        marginLeft: '4.5em',
        marginBottom: '-4.5em'
      }}
    >
      Refine By:
    </Text>
    <CatalogFilter store={store.catalogStore} />
    <KindFilter store={store.kindStore} />
    <CategoryFilter store={store.categoryStore} /> */}
    <LeftPane store={store} />
  </div>
));

export default App;
