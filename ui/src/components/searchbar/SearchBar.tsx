import { Button, ButtonVariant, InputGroup, TextInput } from '@patternfly/react-core';
import React, { useState } from 'react';
import { SearchIcon } from '@patternfly/react-icons';
import './searchBar.css';

const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');

  const setInput = (event: any) => {
    setValue(event);
  };

  return (
    <InputGroup>
      <TextInput
        name="full-page-data-toolbar-input1"
        id="full-page-data-toolbar-input1"
        placeholder="search for resources"
        type="search"
        aria-label="search input example"
        onChange={setInput}
        value={value}
      />
      <Button variant={ButtonVariant.control} aria-label="search button for search input">
        <SearchIcon />
      </Button>
    </InputGroup>
    // <SearchInput
    //   placeholder="Search for resources"
    //   value={value}
    //   autoComplete="off"
    //   type="text"
    //   aria-label="search"
    //   onChange={setInput}
    //   onClear={() => setValue('')}
    // />
  );
};

export default SearchBar;
