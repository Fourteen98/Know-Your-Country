import React from 'react';
import TestRenderer from 'react-test-renderer';
import countriesData from '../countriesData.json';
import CountryDisplay from '../components/CountryDisplay';

it('Each country render correctly', () => {
  const tree = TestRenderer.create(
    <CountryDisplay country={countriesData[0]} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
