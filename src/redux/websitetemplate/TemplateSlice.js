import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './../feature/api';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await axios.get(`${BASE_URL}templates/`);
  return response.data;  
});

const templatesSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templatesSlice.reducer;
