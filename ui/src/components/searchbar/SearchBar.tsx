import { TextInput } from '@patternfly/react-core';
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');

  const setInput = (event: any) => {
    setValue(event);
  };

  return (
    <TextInput
      value={value}
      type="text"
      onChange={setInput}
      aria-label="text input example"
      placeholder="Search for resources..."
      style={{ marginLeft: '-0.5em' }}
    />
  );
};

export default SearchBar;
