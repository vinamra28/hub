import React from 'react';
import { IResourceStore } from '../../store/resources';
import { DropdownItem, Dropdown, DropdownToggle } from '@patternfly/react-core';
import { useObserver } from 'mobx-react';

interface store {
  store: IResourceStore;
}

const SortByFilter: React.FC<store> = (props: store) => {
  const store = props.store;
  const dropdownItems = [
    <DropdownItem key="name">Name</DropdownItem>,
    <DropdownItem key="Rating">Ratings</DropdownItem>
  ];
  return useObserver(() => {
    return (
      <div>
        <Dropdown
          //   onSelect={onSelect}
          toggle={<DropdownToggle>Name</DropdownToggle>}
          //   isOpen={isOpen}
          dropdownItems={dropdownItems}
        />
      </div>
    );
  });
};

export default SortByFilter;
