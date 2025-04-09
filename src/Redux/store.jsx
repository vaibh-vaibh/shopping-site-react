import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './features/categorySlice'
import productReducer from './features/productSlice'
import cartReducer from './features/cartSlice'
const store=configureStore({
    reducer:{
        categoryR:categoryReducer,
        productR:productReducer,
        cartR:cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store