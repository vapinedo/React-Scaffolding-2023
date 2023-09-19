import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    error: "",
    isLoading:  false,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
    return axios
        .get(import.meta.env.VITE_PRODUCTS_API)
        .then((response) => response.data);
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
    }),
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.error = ""
        state.isLoading = false
        state.data = action.payload
    }),
    builder.addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.data = {}
        state.error = action.error.message
    })
  },
});

export default productsSlice.reducer;