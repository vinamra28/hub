import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { when } from 'mobx';
import Resources, { resourceName } from './Resources';
import { FakeHub } from '../../api/testutil';
import { ResourceStore } from '../../store/resources';
import { KindStore } from '../../store/kind';
import { CatalogStore } from '../../store/catalog';
import { CategoryStore } from '../../store/category';
import { updatedAt } from './Resources';
import { shallow } from 'enzyme';

const TESTDATA_DIR = `src/store/testdata`;
const api = new FakeHub(TESTDATA_DIR);

describe('Resources', () => {
  it('renders correctly', () => {
    const store = ResourceStore.create(
      {},
      {
        api,
        kindStore: KindStore.create({}),
        catalogStore: CatalogStore.create({}),
        categoryStore: CategoryStore.create({}, { api })
      }
    );
    const tree = renderer
      .create(
        <Router>
          <Resources store={store} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return the updated time correctly', (done) => {
    const store = ResourceStore.create(
      {},
      {
        api,
        kindStore: KindStore.create({}),
        catalogStore: CatalogStore.create({}),
        categoryStore: CategoryStore.create({}, { api })
      }
    );

    when(
      () => !store.isLoading,
      () => {
        const diff = updatedAt(store.list[0].latestVersion.updatedAt);

        expect(diff).toBe('3 months ago');

        done();
      }
    );
  });

  fit('should display the name', () => {
    const wrapper = shallow(resourceName('tekton', 'Tekton-Hub'));
  });
});
