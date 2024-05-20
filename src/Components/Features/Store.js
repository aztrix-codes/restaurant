import { configureStore, createSlice } from "@reduxjs/toolkit";
import { itemCards } from "../../Utils/SellCardData";

const manageOrder = createSlice({
  name: "Orders",
  initialState: itemCards,
  reducers: {
    increment: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.count > 0) {
        item.orderedCount += 1;
        item.count -= 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.orderedCount > 0) {
        item.orderedCount -= 1;
        item.count += 1;
      }
    },
    stockIncrement: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
    stockDecrement: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.count > 0) {
        item.count -= 1;
      }
    },
    clearOrder: (state, action) => {
        state.forEach((item) => {
          if (item.orderedCount > 0) {
            item.orderedCount = 0;
          }
        });
      },
  },
});

export const { increment, decrement, stockIncrement, stockDecrement, clearOrder } =
  manageOrder.actions;

const store = configureStore({
  reducer: {
    Orders: manageOrder.reducer,
  },
});

export default store;
