import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

interface LoginState {
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LoginState = {
  user: null,
  token: localStorage.getItem("token"),
  status: "idle",
  error: null
}

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (loginData: { username: string; password: string }) => {
    const response = await axios.post("https://dummyjson.com/auth/login", loginData)
    return response.data
  }
)

export const fetchCurrentUser = createAsyncThunk(
  "login/fetchCurrentUser",
  async (token: string) => {
    const response = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    return response.data
  }
)

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.token = action.payload.token
        localStorage.setItem("token", action.payload.token)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to login"
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.user = action.payload
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to fetch user data"
      })
  }
})

export const { logout } = loginSlice.actions

export default loginSlice.reducer
