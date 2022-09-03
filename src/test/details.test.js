import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Details from '../pages/Details';
import store from '../redux/configureStore';

it('Each country render correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
        <Details />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
