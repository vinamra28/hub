import React, { useState } from 'react';
import { IResourceStore } from '../../store/resources';
import { DropdownItem, Dropdown, DropdownToggle } from '@patternfly/react-core';
import { useObserver } from 'mobx-react';
import "./SortByFilter.css";

interface store {
  store: IResourceStore;
}

const SortByFilter: React.FC<store> = (props: store) => {
  const store = props.store;
  const [sort, setSort] = useState('Name');
  const [isOpen, set] = useState(false);
  let tempArr: any = [];
  function sortByName(event: any) {
    setSort(event.target.text);
    const taskarr = tempArr.sort((first: any, second: any) => {
      if (first.name.toLowerCase() > second.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  // eslint-disable-next-line require-jsdoc
  function sortByRatings(event: any) {
    setSort(event.target.text);
    const taskarr = tempArr.sort((first: any, second: any) => {
      if (first.rating < second.rating) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  const dropdownItems = [
    <DropdownItem key="name" onClick={sortByName}>
      Name
    </DropdownItem>,
    <DropdownItem key="Rating" onClick={sortByRatings}>
      Ratings
    </DropdownItem>
  ];
  const ontoggle = (isOpen: React.SetStateAction<boolean>) => set(isOpen);
  const onSelect = () => set(!isOpen);
  return useObserver(() => {
    return (
      <div>
        <Dropdown
          onSelect={onSelect}
          toggle={<DropdownToggle onToggle={ontoggle}>{sort}</DropdownToggle>}
          isOpen={isOpen}
          dropdownItems={dropdownItems}
          className="dropdown"
        />
      </div>
    );
  });
};

export default SortByFilter;
