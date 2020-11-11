/*import React from 'react';
import {
  Card,
  CardHeader,
  Grid,
  GridItem,
  Text,
  TextContent,
  TextVariants,
  Badge
} from '@patternfly/react-core';
import { BuildIcon, UserIcon, GithubIcon } from '@patternfly/react-icons';

const summary: string =
  'This task syncs (deploys) an Argo CD application and waits for it to be healthy.';
const detail: string =
  'To do so, it requires the address of the Argo CD server and some form of authentication either a username/password or an authentication token.';

const Details: React.FC = () => {
  return (
    <Grid
      style={{
        // width: '115%',
        margin: '-2em',
        paddingBottom: '2em'
      }}
    >
      <GridItem>
        <Card>
          <Grid>
            <GridItem span={1} />
            <GridItem span={1}>
              <div style={{ marginTop: '4.7em' }}>
                <BuildIcon size="xl" />
              </div>
            </GridItem>
            <GridItem span={9}>
              <CardHeader style={{ paddingTop: '2em', marginLeft: '-4em' }}>
                <TextContent>
                  <Grid span={2} style={{ marginTop: '1.5em' }} hasGutter>
                    <GridItem span={1}>
                      <Text component={TextVariants.h2} style={{ fontSize: '2em' }}>
                        argocd
                      </Text>
                    </GridItem>
                    <GridItem span={1} style={{ marginTop: '0.3em' }}>
                      <UserIcon size="lg" />
                    </GridItem>
                  </Grid>
                  <GithubIcon size="md" style={{ marginRight: '0.5em' }} />
                  <a href="github.com/tektoncd/catalog" target="_">
                    Open argocd in Github
                  </a>
                  <Grid span={8}>
                    <GridItem style={{ textAlign: 'justify' }}>
                      {summary}
                      <br />
                      <br />
                      {detail}
                    </GridItem>
                    <GridItem>
                      <Badge
                        style={{
                          paddingRight: '1em',
                          marginBottom: '1em',
                          marginRight: '1em'
                        }}
                        key="cli"
                        className="badge"
                      >
                        cli
                      </Badge>
                      <Badge
                        style={{
                          paddingRight: '1em',
                          marginBottom: '1em',
                          marginRight: '1em'
                        }}
                        key="tekton"
                        className="badge"
                      >
                        tekton
                      </Badge>
                    </GridItem>
                  </Grid>
                </TextContent>
              </CardHeader>
            </GridItem>
            <GridItem span={1} />
          </Grid>
        </Card>
      </GridItem>
    </Grid>
  );
};
export default Details;
*/

import React from 'react';
import {
  Card,
  CardHeader,
  Grid,
  GridItem,
  Text,
  TextContent,
  TextVariants,
  Badge,
  CardHeaderMain,
  CardActions,
  CardFooter,
  Button,
  Dropdown,
  DropdownToggle,
  CardBody
} from '@patternfly/react-core';
import { BuildIcon, UserIcon, GithubIcon, StarIcon } from '@patternfly/react-icons';
import Rating from '../Rating/Rating';

const summary: string =
  'This task syncs (deploys) an Argo CD application and waits for it to be healthy.';
const detail: string =
  'To do so, it requires the address of the Argo CD server and some form of authentication either a username/password or an authentication token.';
const dropdownItems: any = [];
const Details: React.FC = () => {
  return (
    <Grid
      style={{
        margin: '-2em'
      }}
    >
      <GridItem>
        <Card isCompact>
          <CardHeader>
            <Grid>
              <GridItem span={2}>
                <BuildIcon size="xl" color="#484848" style={{ alignItems: 'right' }} />
              </GridItem>
              <GridItem span={1}>
                <Text component={TextVariants.h2} style={{ fontSize: '2em' }}>
                  argocd
                </Text>
              </GridItem>
              <GridItem span={9}>
                <UserIcon size="lg" />
              </GridItem>
              <GridItem span={2} />
              <GridItem span={10}>
                <TextContent>
                  <GithubIcon size="md" />
                  <a href="github.com/tektoncd/catalog" target="_">
                    Open argocd in Github
                  </a>
                </TextContent>
              </GridItem>
              <GridItem span={2} />
              <GridItem span={10}>
                {summary}
                <br />
                <br />
                {detail}
              </GridItem>
            </Grid>
            <CardActions style={{ paddingTop: '2em' }}>
              <Grid hasGutter>
                <GridItem span={1}>
                  <StarIcon />
                </GridItem>
                <GridItem span={3}>
                  <Text>4.5</Text>
                </GridItem>
                <GridItem span={12}>
                  <Rating />
                </GridItem>
                <GridItem>
                  <Button variant="primary" className="button">
                    Install
                  </Button>
                </GridItem>
                <GridItem>
                  <Dropdown
                    toggle={<DropdownToggle>0.1 (latest)</DropdownToggle>}
                    dropdownItems={dropdownItems}
                  />
                </GridItem>
              </Grid>
            </CardActions>
          </CardHeader>
          <CardFooter>
            <Grid span={12}>
              <GridItem>
                <Badge key="cli" className="badge">
                  cli
                </Badge>
                <Badge key="tekton" className="badge">
                  tekton
                </Badge>
              </GridItem>
            </Grid>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
};
export default Details;
