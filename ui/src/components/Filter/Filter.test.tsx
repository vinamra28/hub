import React from 'react';
import { FakeHub } from '../../api/testutil';
import { when } from 'mobx';
import { shallow } from 'enzyme';
import Filter from './Filter';
import { CategoryStore } from '../../store/category';
import { titleCase } from './Filter';
import { CatalogStore } from '../../store/catalog';
import { KindStore } from '../../store/kind';
import { ResourceStore } from '../../store/resources';

const TESTDATA_DIR = `src/store/testdata`;
const api = new FakeHub(TESTDATA_DIR);

describe('Filter component', () => {
  it('should render the component', (done) => {
    const store = CategoryStore.create({}, { api });

    when(
      () => !store.isLoading,
      () => {
        expect(store.count).toBe(5);
        expect(store.isLoading).toBe(false);

        const component = shallow(<Filter store={store} header="Categories" />);
        expect(component).toMatchSnapshot();

        done();
      }
    );
  });

  it('checks the checkbox render count', (done) => {
    const store = CategoryStore.create({}, { api });

    when(
      () => !store.isLoading,
      () => {
        const component = shallow(<Filter store={store} header="Categories" />);
        expect(component.find('Checkbox[aria-label="controlled checkbox"]').length).toEqual(5);

        done();
      }
    );
  });

  it('finds the button and matches the count', (done) => {
    const store = CategoryStore.create({}, { api });

    when(
      () => !store.isLoading,
      () => {
        const component = shallow(<Filter store={store} header="Categories" />);

        expect(component.find('Button[variant="plain"]').length).toEqual(1);

        done();
      }
    );
  });
});

describe('Test TitleCase function', () => {
  it('Test titleCase function', () => {
    const val = titleCase('test value');
    expect(val).toEqual('Test Value');
  });
});
