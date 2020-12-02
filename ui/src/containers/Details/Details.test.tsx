import React from 'react';
import Details from '.';
import { FakeHub } from '../../api/testutil';
import { createProviderAndStore } from '../../store/root';
import { mount } from 'enzyme';
import { when } from 'mobx';

const TESTDATA_DIR = `src/store/testdata`;
const api = new FakeHub(TESTDATA_DIR);
const { Provider, root } = createProviderAndStore(api);

jest.mock('react-router-dom', () => {
  return {
    useParams: () => {
      return {
        name: 'ansible-runner'
      };
    }
  };
});

it('should render the details component', (done) => {
  const component = mount(
    <Provider>
      <Details />
    </Provider>
  );

  const { resources } = root;
  when(
    () => {
      return !resources.isLoading;
    },
    () => {
      setTimeout(() => {
        const resource = resources.filteredResources;
        expect(resource.length).toBe(6);

        component.update();

        const r = component.find(Details);
        expect(r.length).toEqual(1);

        expect(component.debug()).toMatchSnapshot();

        done();
      }, 1000);
    }
  );
});
