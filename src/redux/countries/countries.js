import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const GETCOUNTRIES = 'GET_COUNTRIES';
const SEARCHCOUNTRIES = 'SEARCH_COUNTRIES';

export const getCountries = createAsyncThunk(GETCOUNTRIES, async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
});

export const searchCountries = createAsyncThunk(SEARCHCOUNTRIES, async (search) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
  return response.data;
});

const countriesSlicer = createSlice({
  name: 'countries',
  initialState,
  extraReducers: {
    [getCountries.fulfilled]: (state, action) => action.payload,
    [searchCountries.fulfilled]: (state, action) => action.payload,
  },
});

export default countriesSlicer.reducer;
