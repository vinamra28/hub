import React from 'react';
import {
  Gallery,
  GalleryItem,
  Card,
  CardBody,
  Pagination,
  GridItem,
  Grid,
  CardHeader,
  CardTitle,
  CardFooter,
  TextContent,
  Badge,
  CardActions
} from '@patternfly/react-core';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { BuildIcon, UserIcon, StarIcon } from '@patternfly/react-icons';
import { IResourceStore } from '../../store/resources';
import { useObserver } from 'mobx-react';
import { ITag } from '../../store/category';
import { Link } from 'react-router-dom';
import './Resources.css';

interface store {
  store: IResourceStore;
}
TimeAgo.addLocale(en);

// Create relative date/time formatter.
const timeAgo = new TimeAgo('en-US');
export const updatedAt = (updatedAt: string) => {
  return timeAgo.format(new Date(updatedAt).getTime(), 'round');
};

export const resourceName = (name: string, displayName: string) => {
  return displayName === '' ? (
    <span style={{ fontFamily: 'courier, monospace' }}>{name}</span>
  ) : (
    <span>{displayName}</span>
  );
};

const Resources: React.FC<store> = (props: store) => {
  const store = props.store;

  const [pageNumber, setPageNumber] = React.useState(1);
  const [perPgae, setPerPage] = React.useState(20);

  const setPage = (event: React.MouseEvent | React.KeyboardEvent | MouseEvent, page: number) => {
    setPageNumber(page);
  };
  const perPageSelect = (
    event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    perpage: number
  ) => {
    setPerPage(perpage);
  };

  return useObserver(() => (
    <Grid>
      <GridItem>
        <Pagination
          itemCount={200}
          perPage={perPgae}
          onSetPage={setPage}
          onPerPageSelect={perPageSelect}
          page={pageNumber}
          isCompact
        />
        <Gallery hasGutter>
          {store.list.map((resource, r) => (
            <GalleryItem key={r} style={{ margin: 'auto' }}>
              <Link to={'/details?' + store.list[r].name} style={{ textDecoration: 'none' }}>
                <Card isHoverable className="hub-resource-card">
                  <CardHeader>
                    <Grid>
                      <GridItem span={7}>
                        <BuildIcon />
                      </GridItem>

                      <GridItem span={5}>
                        <UserIcon />
                      </GridItem>
                    </Grid>

                    <CardActions>
                      <StarIcon />
                      <TextContent className="text">{store.list[r].rating}</TextContent>
                    </CardActions>
                  </CardHeader>

                  <CardTitle>
                    <Grid>
                      <GridItem span={10}>
                        <span className="hub-resource-name">
                          {resourceName(
                            store.list[r].name,
                            store.list[r].latestVersion.displayName
                          )}
                        </span>
                      </GridItem>

                      <GridItem span={2}>
                        <span className="hub-resource-version">
                          v{store.list[r].latestVersion.version}
                        </span>
                      </GridItem>
                    </Grid>
                  </CardTitle>

                  <CardBody
                    style={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden'
                    }}
                  >
                    {store.list[r].latestVersion.description}
                  </CardBody>

                  <CardFooter>
                    <TextContent className="hub-resource-updatedAt">
                      Updated {updatedAt(store.list[r].latestVersion.updatedAt)}
                    </TextContent>

                    <div style={{ height: '2.5em' }}>
                      {store.list[r].tags.slice(0, 3).map((tag: ITag) => (
                        <Badge className="hub-tags" key={`badge-${tag.id}`}>
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </GalleryItem>
          ))}
        </Gallery>
      </GridItem>
    </Grid>
  ));
};
export default Resources;
