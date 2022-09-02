import TestRenderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import Countries from '../components/Countries'; // eslint-disable-line
import store from '../redux/configureStore';

it('Countries renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Countries />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
