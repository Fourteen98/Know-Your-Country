import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const GET_COUNTRIES = 'GET_COUNTRIES';
const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';

const getCountries = createAsyncThunk(GET_COUNTRIES, async () => {
  const response = await axios.get('https://restcountries.eu/rest/v3.1/all');
  return response.data;
});

const searchCountries = createAsyncThunk(SEARCH_COUNTRIES, async (search) => {
  const response = await axios.get(`https://restcountries.eu/rest/v3.1/name/${search}`);
  return response.data;
});

const countriesSlicer = createSlice({
  name: 'countries',
  initialState,
  extraReducers: {
    [getCountries.fulfilled]: (state, action) => {
      state = action.payload;
    },
    [searchCountries.fulfilled]: (state, action) => {
      state = action.payload;
    },
  },
});

export default countriesSlicer.reducer;
