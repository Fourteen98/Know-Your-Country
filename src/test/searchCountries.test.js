import { searchCountries } from '../redux/countries/countries';

it('getSearchedCountries should return a promise', () => {
  expect(searchCountries()).toEqual(expect.any(Function));
});
