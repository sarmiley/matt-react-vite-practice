import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".."

const initialState = {
  isLogin: false,
  authToken: "",
  loadingApiList: [] as string[],
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addLoadingApi(state, action: PayloadAction<string>) {
      state.loadingApiList.push(action.payload)
    },
    removeLoadingApi(state, action: PayloadAction<string>) {
      state.loadingApiList = state.loadingApiList.filter(
        (api) => api !== action.payload
      )
    },
    updateLoginInfo(
      state,
      action: PayloadAction<{ isLogin: boolean; authToken: string }>
    ) {
      state.isLogin = action.payload.isLogin
      state.authToken = action.payload.authToken
    },
  },
})

export const selectIsLogin = (state: RootState) => {
  return state.app.isLogin
}

export const { addLoadingApi, removeLoadingApi, updateLoginInfo } =
  appSlice.actions
export default appSlice
