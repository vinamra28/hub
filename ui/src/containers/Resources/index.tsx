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
import { BuildIcon, UserIcon, StarIcon } from '@patternfly/react-icons';
import { Link } from 'react-router-dom';
import './Resources.css';
import { useMst } from '../../store/root';
import { useObserver } from 'mobx-react';
import { ITag } from '../../store/category';
import { IResource } from '../../store/resource';

export const resourceName = (name: string, displayName: string) => {
  return displayName === '' ? <span>{name}</span> : <span>{displayName}</span>;
};

const Resources = () => {
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
  const { resources } = useMst();

  return useObserver(() => (
    <React.Fragment>
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
            {resources.filteredResources.map((resource: IResource, r: number) => (
              <GalleryItem key={r} style={{ margin: 'auto' }}>
                <Link
                  to={{
                    pathname: `${resources.filteredResources[r].catalog.name}/${resources.filteredResources[r].kind.name}/${resources.filteredResources[r].name}/${resources.filteredResources[r].latestVersion.version}`,
                    state: {
                      id: resources.filteredResources[r].id
                    }
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  <Card isHoverable className="hub-resource-card">
                    <CardHeader>
                      <BuildIcon style={{ marginRight: '0.5em' }} />
                      <UserIcon />

                      <CardActions>
                        <StarIcon />
                        <TextContent className="text">
                          {resources.filteredResources[r].rating}
                        </TextContent>
                      </CardActions>
                    </CardHeader>

                    <CardTitle>
                      <span className="hub-resource-name">
                        {resourceName(
                          resources.filteredResources[r].name,
                          resources.filteredResources[r].latestVersion.displayName
                        )}
                      </span>

                      <span className="hub-resource-version">
                        v{resources.filteredResources[r].latestVersion.version}
                      </span>
                    </CardTitle>

                    <CardBody className="hub-resource-body fade">
                      {resources.filteredResources[r].latestVersion.description}
                    </CardBody>

                    <CardFooter>
                      <TextContent className="hub-resource-updatedAt">
                        Updated {resources.filteredResources[r].latestVersion.updatedAt.fromNow()}
                      </TextContent>

                      <div style={{ height: '2.5em' }}>
                        {resources.filteredResources[r].tags.slice(0, 3).map((tag: ITag) => (
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
    </React.Fragment>
  ));
};

export default Resources;
