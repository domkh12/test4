import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../feature/api";

const initialState = {
  user: JSON.parse(localStorage.getItem("access")) || null,
  profile: null,
  accessToken: localStorage.getItem("access") || null,
  refreshToken: localStorage.getItem("refresh") || null,
  status: "idle",
  error: null,
};

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return rejectWithValue(errorText);
      }

      const data = await response.json();

      if (rememberMe) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { getState, rejectWithValue }) => {
    const {
      user: { accessToken },
    } = getState();
    try {
      const response = await fetch(`${BASE_URL}profile/`, {
        headers: {
          Authorization: `Bearer ${initialState.user.access}`,
        },
      });
      console.log(initialState.user.access);
      console.log(response);
      if (!response.ok) {
        const errorText = await response.text();
        return rejectWithValue(errorText);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (profileData, { getState, rejectWithValue }) => {
    const {
      user: { accessToken },
    } = getState();

    let body;
    let headers = {
      Authorization: `Bearer ${initialState.user.access}`,
    };

    if (profileData instanceof FormData) {
      body = profileData;
    } else {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(profileData);
    }

    try {
      const response = await fetch(`${BASE_URL}profile/`, {
        method: "PUT",
        headers,
        body,
      });

      if (!response.ok) {
        const errorText = await response.text();
        return rejectWithValue(errorText);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");
      localStorage.removeItem("profile");
      localStorage.removeItem("selectedTemplate");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.error = null;
        localStorage.setItem("access", JSON.stringify(action.payload));
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
        state.error = null;
        localStorage.setItem("profile", JSON.stringify(action.payload));
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
        state.error = null;
        localStorage.setItem("profile", JSON.stringify(action.payload));
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
