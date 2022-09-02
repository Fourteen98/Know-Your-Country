import { getCountries } from '../redux/countries/countries';

it('getCountriesApi should return a promise', () => {
  expect(getCountries()).toEqual(expect.any(Function));
});
