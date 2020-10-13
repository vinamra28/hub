import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import {
  PageHeader,
  Brand,
  PageHeaderToolsGroup,
  PageHeaderToolsItem,
  PageHeaderTools,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core';
import logo from '../../assets/logo/logo.png';
import SearchBar from '../searchbar/SearchBar';

const Header: React.FC = () => {
  const logoProps = {
    href: '/',
    target: ''
  };

  const headerTools = (
    <PageHeaderTools>
      <PageHeaderToolsGroup
        visibility={{
          default: 'visible',
          md: 'visible'
        }}
      >
        <PageHeaderToolsItem>
          <SearchBar />
        </PageHeaderToolsItem>

        <PageHeaderToolsItem>
          <TextContent>
            <Text component={TextVariants.h3}>Login</Text>
          </TextContent>
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
    </PageHeaderTools>
  );

  return (
    <PageHeader
      logo={<Brand src={logo} alt="Tekton Hub Logo" />}
      headerTools={headerTools}
      logoProps={logoProps}
      showNavToggle
    />
  );
};

export default Header;
