import React from 'react';
import { observer } from 'mobx-react';
import '@patternfly/react-core/dist/styles/base.css';
import { createProvider } from '../../store/root';
import LeftPane from '../../components/LeftPane';
import { Grid, GridItem, Page, PageSection } from '@patternfly/react-core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Resources from '../Resources';
import Details from '../Details';
import './App.css';

const Provider = createProvider();

const App: React.FC = observer(() => {
  return (
    <Provider>
      <Router>
        <Page header={<Header />}>
          <Route exact path="/" component={Background} />
          <PageSection>
            <Grid hasGutter>
              <GridItem span={12}>
                <Route exact path="/tekton/task/name/version" component={Details}></Route>
              </GridItem>
              <GridItem span={2} rowSpan={1}>
                <Route exact path="/" component={() => <LeftPane />}></Route>
              </GridItem>

              <GridItem span={10} rowSpan={1}>
                <Route exact path="/" component={Resources}></Route>
              </GridItem>
            </Grid>
          </PageSection>
          <Footer />
        </Page>
      </Router>
    </Provider>
  );
});

export default App;
