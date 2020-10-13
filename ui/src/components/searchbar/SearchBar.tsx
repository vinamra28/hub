import { SearchInput } from '@patternfly/react-core';
import React, { useState } from 'react';
import './searchBar.css';

const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = (event: any) => {
    setValue(event);
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <SearchInput
      style={{ marginRight: '12em', marginLeft: '-5em' }}
      placeholder="Find by name"
      value={value}
      onChange={onChange}
      onClear={onClear}
    />
  );
};

export default SearchBar;
