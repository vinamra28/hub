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
  DropdownToggle
} from '@patternfly/react-core';
import { BuildIcon, UserIcon, GithubIcon } from '@patternfly/react-icons';
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
        <Card>
          <CardHeader style={{ marginTop: '1.5em' }}>
            <CardHeaderMain>
              <Grid style={{ marginTop: '2.5em' }}>
                <GridItem span={1} />
                <GridItem span={1}>
                  <BuildIcon size="xl" color="#484848" />
                </GridItem>
                <GridItem span={1}>
                  <Text component={TextVariants.h2} style={{ fontSize: '2em' }}>
                    argocd
                  </Text>
                </GridItem>
                <GridItem span={9} style={{ marginTop: '0.3em' }}>
                  <UserIcon size="lg" />
                </GridItem>
                <GridItem span={2} />
                <GridItem span={10}>
                  <TextContent>
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
                    </Grid>
                  </TextContent>
                </GridItem>
              </Grid>
            </CardHeaderMain>
            <CardActions>
              <Grid>
                <GridItem>
                  <Rating />
                </GridItem>
                <GridItem>
                  <Button variant="primary" className="button" style={{ width: '8.5em' }}>
                    Install
                  </Button>
                </GridItem>
                <GridItem>
                  <Dropdown
                    style={{ marginLeft: '-1em', marginTop: '2em' }}
                    toggle={
                      <DropdownToggle style={{ width: '8.5em' }}>0.1 (latest)</DropdownToggle>
                    }
                    dropdownItems={dropdownItems}
                  />
                </GridItem>
              </Grid>
            </CardActions>
          </CardHeader>
          <CardFooter>
            <Grid span={12}>
              <GridItem style={{ paddingLeft: '16.5em' }}>
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
                {/* </GridItem>
              <GridItem span={1}> */}
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
            {/* <div style={{ height: '2.5em', marginLeft: '16.5em' }}>
              
            </div> */}
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
};
export default Details;
