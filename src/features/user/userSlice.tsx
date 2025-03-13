import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  image: string;
}

interface UserState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  users: [],
  status: "idle",
  error: null
}

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("https://dummyjson.com/users")
  return response.data.users as User[]
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  }
})

export default userSlice.reducer
