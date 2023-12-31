import { combineReducers, configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slices/counterSlice"
import logger from "redux-logger"
import { baseApiService } from "@/services/baseApiService"
import appSlice from "./slices/appSlice"
import apiLoadingMiddleware from "./middleware/apiLoadingMiddleware"
import apiErrorHandleMiddleware from "./middleware/apiErrorHandleMiddleware"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist"
import storage from "redux-persist/es/storage"
import { AppEnvEnum } from "@/enums/common"

const persistConfig = {
  key: appSlice.name,
  storage,
  // 將要 persist 的 state key 寫在這裡
  whitelist: ["lang", "isLogin", "authToken"],
}

/**
 * 所有的 Reducer 都會在這裡加入
 */
const rootReducer = combineReducers({
  app: persistReducer(persistConfig, appSlice.reducer),
  counter: counterSlice.reducer,
  [baseApiService.reducerPath]: baseApiService.reducer,
})

/**
 * 所有的 Middleware 都會在這裡加入
 */
const middleware = [
  // 加入 logger middleware 將 store 的變化 log 在 console 中
  logger,
  apiErrorHandleMiddleware,
  apiLoadingMiddleware,
  // 加入 api middleware 來啟用 caching、invalidation、polling 等其他方法
  baseApiService.middleware,
]

/**
 * 初始化 store
 */
const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            // ignore persist 相關 action
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
        },
      })
        .prepend()
        .concat(middleware),

    // dev tools only for development
    devTools: process.env.NODE_ENV === AppEnvEnum.DEVELOPMENT,
  })
}

const store = initStore()

// Persist Store
export const persistor = persistStore(store)

// 導出給 useAppSelector 使用
export type RootState = ReturnType<typeof store.getState>

// 導出給 AppDispatch 使用
export type AppDispatch = typeof store.dispatch

export default store
