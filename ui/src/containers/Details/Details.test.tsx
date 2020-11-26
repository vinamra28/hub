import { mount } from 'enzyme';
import React from 'react';
import Details from '.';
import { FakeHub } from '../../api/testutil';
import { createProviderAndStore } from '../../store/root';

const TESTDATA_DIR = `src/store/testdata`;
const api = new FakeHub(TESTDATA_DIR);
const { Provider, root } = createProviderAndStore(api);

describe('Details Component', () => {
  it('should render the details component', () => {
    const component = mount(
      <Provider>
        <Details />
      </Provider>
    );
    expect(component.debug()).toMatchSnapshot();
  });
});
