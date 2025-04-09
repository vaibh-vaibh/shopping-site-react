import {createSlice} from '@reduxjs/toolkit'
const cartSlice=createSlice({
    name:'cart',
    initialState:{arrCart:[]},
    reducers:{
       addToCart:(state,action) =>{
        var p=action.payload;
        var p1=state.arrCart.find((e)=>e.product.id==p.id)
        if(p1){
                p1.quantity+=1;
        }
        else{
            state.arrCart.push({product:p,quantity:1})
        }
        console.log(state.arrCart)
       },
       removeFromCart:(state,action) =>{
        var p=action.payload;
        var i=state.arrCart.findIndex((e)=>e.product.id==p.id)
        if(i!=-1){
            state.arrCart.splice(i,1);    
        }
       
       },
       increaseProduct:(state,action) =>{
        var p=action.payload;
        var p1=state.arrCart.find((e)=>e.product.id==p.id)
        if(p1){
                p1.quantity+=1;
        }
       
       
       },
       decreaseProduct:(state,action) =>{
        var p=action.payload;
        var p1=state.arrCart.find((e)=>e.product.id==p.id)
        if(p1){
            if(p1.quantity==1){
                var i=state.arrCart.findIndex((e)=>e.product.id==p.id)
                state.arrCart.splice(i,1);  
            }
            else{
                p1.quantity-=1;
            }
        }
       
       
       }
    }
})
export default cartSlice.reducer
export const {addToCart,removeFromCart,increaseProduct,decreaseProduct}=cartSlice.actions