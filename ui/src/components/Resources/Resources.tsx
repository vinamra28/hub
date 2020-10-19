import { Card, CardBody, Gallery, GalleryItem, Pagination } from '@patternfly/react-core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
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
      <Pagination
        itemCount={200}
        perPage={perPgae}
        onSetPage={setPage}
        onPerPageSelect={perPageSelect}
        page={pageNumber}
        isCompact
      />
      <Link to="/details">
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
      </Link>
    </React.Fragment>
  );
};
export default Resources;
