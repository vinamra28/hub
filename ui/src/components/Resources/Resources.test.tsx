import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Resources from './Resources';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Resources />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
