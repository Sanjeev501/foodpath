import cartReducer from "./cartSlice";
import profileReducer from "./profileSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartReducer,
    profile: profileReducer,
  },
});

export default store;
