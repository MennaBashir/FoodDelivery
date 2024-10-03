import { createSlice } from "@reduxjs/toolkit";
const Items = localStorage.getItem('data') !== null ?
   JSON.parse(localStorage.getItem('data')) : [];
export const EditList_Food = createSlice({
   initialState: Items,
   name: "EditList",
   reducers: {
      AddToCart: (state, action) => {
         const CheckBefore = state.find((el) => {
            if (Number(el.id) === Number(action.payload.id))
               return el;
         });
         if (CheckBefore) {
            CheckBefore.quantity += 1;
         }
         else {
            const newItem = { ...action.payload, quantity: 1 };
            state.push(newItem);
         }
         localStorage.setItem('data', JSON.stringify(state));
      },
      RemoveEnd: (state, action) => {
         const Data = state.filter((el) => {
            return el.id !== action.payload.id;
         })
         localStorage.setItem('data', JSON.stringify(Data));
         return Data;
      },
      RemoveFromCart: (state, action) => {
         const CheckItem = state.find((el) => {
            return Number(el.id) === Number(action.payload.id);
         });
         if (CheckItem && CheckItem.quantity > 0) {
            CheckItem.quantity -= 1;
         }
         localStorage.setItem('data', JSON.stringify(state));
      },
   }
})
export const { AddToCart, RemoveFromCart, RemoveEnd } = EditList_Food.actions;
export default EditList_Food.reducer;