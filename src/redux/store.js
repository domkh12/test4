import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./user/UserSlice";
import userRegisterSlice from "./verify-user/userRegisterSlice";
import OtpSlice from "./verify-user/OtpSlice";
import templateReducer from "./websitetemplate/TemplateSlice";
import authReducer from "./authSlice/authSlice"

export const store = configureStore({
  reducer: {
    user: useReducer,
    userRegister: userRegisterSlice,
    otp: OtpSlice,
    templates: templateReducer,
    auth: authReducer,
  },
});
