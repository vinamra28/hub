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
  PageSidebar,
  Chip,
  ChipGroup,
  Flex
} from '@patternfly/react-core';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Background from '../background/Background';
import './app.css';
import Navigation from '../Navigation/Navigation';

const App: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPgae, setPerPage] = useState(20);
  const [chips, setChips] = useState(['Chip one', 'Chip two', 'Chip three', 'Chip 4']);

  const setPage = (event: React.MouseEvent | React.KeyboardEvent | MouseEvent, page: number) => {
    setPageNumber(page);
  };
  const perPageSelect = (
    event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    perpage: number
  ) => {
    setPerPage(perpage);
  };

  const deleteItem = (id: string) => {
    var copyOfChips = chips;
    const index = copyOfChips.indexOf(id);
    if (index !== -1) {
      copyOfChips.splice(index, 1);
      setChips(copyOfChips);
    }
  };

  const deleteCategory = () => {
    setChips([]);
  };

  return (
    <React.Fragment>
      <Page
        header={<Header />}
        sidebar={<PageSidebar theme="dark" nav={<Navigation />} />}
        isManagedSidebar
      >
        <Background />
        <Flex style={{ marginTop: '3em', marginLeft: '2em' }}>
          <ChipGroup numChips={2} categoryName="Kind" isClosable onClick={deleteCategory}>
            {chips.map((currentChip) => (
              <Chip key={currentChip} onClick={() => deleteItem(currentChip)}>
                {currentChip}
              </Chip>
            ))}
          </ChipGroup>
          <ChipGroup numChips={2} categoryName="Support Tier" isClosable onClick={deleteCategory}>
            {chips.map((currentChip) => (
              <Chip key={currentChip} onClick={() => deleteItem(currentChip)}>
                {currentChip}
              </Chip>
            ))}
          </ChipGroup>
          <ChipGroup numChips={2} categoryName="Category" isClosable onClick={deleteCategory}>
            {chips.map((currentChip) => (
              <Chip key={currentChip} onClick={() => deleteItem(currentChip)}>
                {currentChip}
              </Chip>
            ))}
          </ChipGroup>
        </Flex>
        <PageSection>
          <Grid hasGutter>
            <GridItem span={11} rowSpan={2}>
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
