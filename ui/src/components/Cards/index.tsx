import React from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardTitle,
  CardBody,
  TextContent,
  Badge,
  CardFooter,
  GalleryItem,
  Spinner
} from '@patternfly/react-core';
import { StarIcon } from '@patternfly/react-icons';
import './Cards.css';
import { IResource } from '../../store/resource';
import { ITag } from '../../store/category';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import { IconSize } from '@patternfly/react-icons';

export const resourceName = (name: string, displayName: string) => {
  return displayName === '' ? <span>{name}</span> : <span>{displayName}</span>;
};

interface Props {
  items: IResource[];
}

const Cards: React.FC<Props> = (resources) => {
  if (resources.items.length === 0) {
    return <Spinner className="hub-spinner" />;
  }

  return (
    <React.Fragment>
      {resources.items.map((resource: IResource, r: number) => (
        <GalleryItem key={r}>
          <Link
            to={{
              pathname: `${resources.items[r].catalog.name.toLowerCase()}/${resources.items[
                r
              ].kind.name.toLowerCase()}/${resources.items[r].name.toLowerCase()}/${
                resources.items[r].latestVersion.version
              }`
            }}
            className="hub-card-link"
          >
            <Card className="hub-resource-card">
              <CardHeader>
                <span className="hub-kind-icon">
                  <Icon
                    id={resources.items[r].kind.icon}
                    size={IconSize.sm}
                    label={resources.items[r].kind.name}
                  />
                </span>

                <span className="hub-catalog-icon">
                  <Icon
                    id={resources.items[r].catalog.icon}
                    size={IconSize.sm}
                    label={resources.items[r].catalog.name}
                  />
                </span>

                <CardActions>
                  <StarIcon />
                  <TextContent className="text">{resources.items[r].rating}</TextContent>
                </CardActions>
              </CardHeader>

              <CardTitle>
                <span className="hub-resource-name">
                  {resourceName(
                    resources.items[r].name,
                    resources.items[r].latestVersion.displayName
                  )}
                </span>
                <span className="hub-resource-version">
                  v{resources.items[r].latestVersion.version}
                </span>
              </CardTitle>

              <CardBody className="hub-resource-body fade">
                {resources.items[r].latestVersion.description}
              </CardBody>

              <CardFooter>
                <TextContent className="hub-resource-updatedAt">
                  Updated {resources.items[r].latestVersion.updatedAt.fromNow()}
                </TextContent>

                <div style={{ height: '2.5em' }}>
                  {resources.items[r].tags.slice(0, 3).map((tag: ITag) => (
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
    </React.Fragment>
  );
};

export default Cards;
