import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countries.js';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
