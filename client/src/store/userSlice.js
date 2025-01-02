import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  email: "",
  avatar: "",
  mobile: "",
  last_login_date: "",
  address_details: [],
  shopping_cart: [],
  orderHistory: [],
  role: "",
  createdAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.mobile = action.payload.mobile;
      state.last_login_date = action.payload.last_login_date;
      state.address_details = action.payload.address_details;
      state.shopping_cart = action.payload.shopping_cart;
      state.orderHistory = action.payload.orderHistory;
      state.role = action.payload.role;
      state.createdAt = action.payload.createdAt;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
