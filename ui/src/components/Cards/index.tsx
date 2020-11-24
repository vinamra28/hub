import React from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardTitle,
  CardBody,
  TextContent,
  Badge,
  CardFooter
} from '@patternfly/react-core';
import { BuildIcon, StarIcon, UserIcon } from '@patternfly/react-icons';
import './Cards.css';

const Cards = () => {
  const tags = ['buildah', 'image'];
  return (
    <Card className="hub-resource-card">
      <CardHeader>
        <BuildIcon style={{ marginRight: '0.5em' }} />
        <UserIcon />

        <CardActions>
          <StarIcon />
          4.5
        </CardActions>
      </CardHeader>

      <CardTitle>
        <TextContent>
          Buildah
          <span style={{ float: 'right' }}>v0.1</span>
        </TextContent>
      </CardTitle>

      <CardBody className="hub-resource-body fade">
        Buildah task builds source into a container image and then pushes it to a container
        registry. Buildah Task builds source into a container image using Project Atomic's Buildah
        build tool.It uses Buildah's support for building from Dockerfiles, using its buildah bud
        command.
      </CardBody>

      <CardFooter>
        <TextContent className="hub-resource-updatedAt">Updated 5 days ago</TextContent>

        <div style={{ height: '2.5em' }}>
          {tags.slice(0, 3).map((tag: string) => (
            <Badge className="hub-tags" key={`badge-${tag}`}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Cards;
