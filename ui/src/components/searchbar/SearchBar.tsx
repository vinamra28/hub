import { SearchInput } from '@patternfly/react-core';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');

  const setInput = (event: any) => {
    console.log('search-input', event);
    setValue(event);
  };

  return (
    <SearchInput
      placeholder="Search for Tekton resources..."
      autoComplete="off"
      type="search"
      value={value}
      onChange={setInput}
    />
  );
};

export default SearchBar;
