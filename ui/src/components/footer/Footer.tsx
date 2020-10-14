import React from 'react';
import {
  Card,
  Grid,
  Text,
  GridItem,
  Flex,
  FlexItem,
  CardFooter,
  TextVariants,
  TextContent
} from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import tekton from '../../assets/logo/tekton.png';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Card style={{ alignContent: 'center' }}>
        <Grid style={{ margin: '2em' }}>
          <GridItem span={5} rowSpan={3} />

          <GridItem span={2}>
            <a href="https://cd.foundation">
              <img src="https://tekton.dev/partner-logos/cdf.png" alt="tekton.dev" />
            </a>
          </GridItem>

          <GridItem span={6}>
            <TextContent>
              <Text component={TextVariants.h1} style={{ color: 'white' }}>
                Tekton is a{' '}
                <Text component={TextVariants.a} href="https://cd.foundation">
                  Continuous Delivery Foundation
                </Text>{' '}
                project.
              </Text>
            </TextContent>
          </GridItem>

          <GridItem span={7} style={{ marginLeft: '6.5em' }}>
            <img src={tekton} alt="Tekton" className="logo-size" />
          </GridItem>

          <GridItem>
            <CardFooter>
              <Text style={{ color: 'white', textAlign: 'center' }}>
                © 2020 The Linux Foundation®. All rights reserved. The Linux Foundation has
                registered trademarks and uses trademarks. For a list of trademarks of The Linux
                Foundation, please see our{' '}
                <Text
                  component={TextVariants.a}
                  href="https://www.linuxfoundation.org/trademark-usage/"
                >
                  Trademark Usage page
                </Text>
                . Linux is a registered trademark of Linus Torvalds.{' '}
                <Text component={TextVariants.a} href="https://www.linuxfoundation.org/privacy/">
                  Privacy Policy
                </Text>{' '}
                and{' '}
                <Text component={TextVariants.a} href="https://www.linuxfoundation.org/terms/">
                  Terms of Use
                </Text>{' '}
                .
              </Text>
            </CardFooter>
          </GridItem>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default Footer;
