import React, { useState } from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import {
  Page,
  PageSection,
  Grid,
  GridItem,
  Pagination,
  Card,
  GalleryItem,
  CardBody,
  Gallery,
  PageSidebar
} from '@patternfly/react-core';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Background from '../background/Background';
import './app.css';
import Navigation from '../Navigation/Navigation';

const App: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPgae, setPerPage] = useState(20);

  const setPage = (event: React.MouseEvent | React.KeyboardEvent | MouseEvent, page: number) => {
    setPageNumber(page);
  };
  const perPageSelect = (
    event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    perpage: number
  ) => {
    setPerPage(perpage);
  };

  return (
    <React.Fragment>
      <Page
        header={<Header />}
        sidebar={<PageSidebar theme="dark" nav={<Navigation />} />}
        isManagedSidebar
      >
        <Background />
        <PageSection>
          <Grid hasGutter>
            <GridItem span={12} rowSpan={2}>
              {/* TODO: pagination should be  should be in Resource container componnet */}
              <Pagination
                itemCount={200}
                perPage={perPgae}
                onSetPage={setPage}
                onPerPageSelect={perPageSelect}
                page={pageNumber}
                isCompact
              />
              <Gallery hasGutter>
                {Array.apply(0, Array(20)).map((x, i) => (
                  <GalleryItem key={i}>
                    <Card
                      style={{
                        backgroundColor: 'white',
                        height: '15em',
                        width: '15em',
                        marginLeft: '1.5em'
                      }}
                    >
                      <CardBody>This is a card</CardBody>
                    </Card>
                  </GalleryItem>
                ))}
              </Gallery>
            </GridItem>
          </Grid>
        </PageSection>
        <Footer />
      </Page>
    </React.Fragment>
  );
};

export default App;
