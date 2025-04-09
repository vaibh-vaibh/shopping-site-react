import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  });
  
const productSlice=createSlice({
name:'product',
initialState:{loading:false,arrProducts:[],error:'',arrPriceRange:[{min:0,max:50},{min:50,max:100},{min:100,max:200},{min:200,max:500},{min:500,max:5000}],selectedRange:{min:0,max:5000}},
reducers:{
    changeRange:(state,action)=>{
        state.selectedRange=action.payload;
    }
},
extraReducers:(builder)=>{
builder.addCase(fetchProducts.pending,(state,action)=>{
state.loading=true;
state.arrProducts=[];
state.error=''
})
builder.addCase(fetchProducts.fulfilled,(state,action)=>{
    state.loading=false;
    state.arrProducts=action.payload;
    state.error=''
})
builder.addCase(fetchProducts.rejected,(state,action)=>{
    state.loading=false;
    state.error=action.payload 
    state.arrProducts=[]
})
}

})
export default productSlice.reducer
export const {changeRange}=productSlice.actions
