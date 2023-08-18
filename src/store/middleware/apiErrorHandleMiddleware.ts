import { Middleware, MiddlewareAPI } from "redux"
import { AppDispatch, RootState } from ".."
import { Action, isRejectedWithValue } from "@reduxjs/toolkit"
import { increment } from "../slices/counterSlice"

const apiErrorHandleMiddleware =
  ({ dispatch }: MiddlewareAPI<AppDispatch, RootState>) =>
  (next: (action: Action) => void) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (action: any) => {
    if (isRejectedWithValue(action)) {
      const httpCode = action.payload?.originalStatus || action.payload?.status
      if (httpCode) {
        switch (httpCode) {
          case 400:
          case 401:
            dispatch(increment())
            break
          default:
            alert(`目前系統忙碌中，請稍後再試！(${httpCode})`)
            break
        }
      }
    }
    return next(action)
  }

const middleware = apiErrorHandleMiddleware as Middleware

export default middleware
