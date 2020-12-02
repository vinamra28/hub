import React from 'react';
import { when } from 'mobx';
import { shallow } from 'enzyme';
import { FakeHub } from '../../api/testutil';
import { ResourceStore } from '../../store/resource';
import { CategoryStore } from '../../store/category';
import Cards, { resourceName } from '.';

const TESTDATA_DIR = `src/store/testdata`;
const api = new FakeHub(TESTDATA_DIR);

describe('Resources', () => {
  it('should render the resources', (done) => {
    const store = ResourceStore.create({}, { api, categories: CategoryStore.create({}, { api }) });

    when(
      () => !store.isLoading,
      () => {
        const component = shallow(<Cards items={store.filteredResources} />);
        expect(component.debug()).toMatchSnapshot();

        done();
      }
    );
  });

  it('should display the name', () => {
    const wrapper = shallow(resourceName('tekton', ''));
    expect(wrapper.find('span').text()).toBe('tekton');
  });
});
