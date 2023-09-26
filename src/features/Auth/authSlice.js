import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";


const initialState = {
    User:null,
    isError: false,
    isMessage: '',
    isLoading: false,
    isSuccess: true,

}


export const register = createAsyncThunk(
  "users/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.rejectWithValue(message);
    }
  }
);


export const logout = createAsyncThunk('users/logout', async ()=>
{
    return await authService.logout();
}
)



export const login = createAsyncThunk("users/login", async ({pwd,email}, thunkAPI) => {
  try {
    return await authService.login({ pwd, email });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString;
    thunkAPI.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
    name:'auth',
initialState,
reducers:{
    reset: (state)=>{
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.isMessage = '';
    }
},
extraReducers:(builder)=>{
    builder.addCase(register.pending, (state)=>{
        state.isLoading = true;
    })
    .addCase(register.rejected,(state, action)=>{
        state.isError= true;
        state.isMessage= action.payload;
        state.User = null;
        state.isSuccess = false;
        state.isLoading= false;
    }).addCase(register.fulfilled,(state, action)=>{
        state.isError= false;
        state.User = action.payload;
        state.isSuccess = true;
        state.isLoading= false;
    })
    .addCase(logout,(state)=>{
        state.User = null
    })
   .addCase(login.pending, (state)=>{
        state.isLoading = true;
    })
    .addCase(login.rejected,(state, action)=>{
        state.isError= true;
        state.isMessage= action.payload;
        state.User = null;
        state.isSuccess = false;
        state.isLoading= false;
    }).addCase(login.fulfilled,(state, action)=>{
        state.isError= false;
        state.User = action.payload;
        state.isSuccess = true;
        state.isLoading= false;
    })

    

}},
)
export  const {reset} = authSlice.actions;

export default authSlice.reducer