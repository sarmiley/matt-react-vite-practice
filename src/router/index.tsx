import App from "@/App"
import React, { lazy } from "react"
import { Navigate, createBrowserRouter } from "react-router-dom"
import { AppEnvEnum } from "@/enums/common"
import { CommonRoute } from "@/layout/CommonRoute"
// 動態載入 component 達到 code splitting  效果，減少第一次載入頁面所需的 bundle size
const PublicLayout = lazy(() => import("@/views/Public"))
const DevLayout = lazy(() => import("@/views/Dev"))
const HomeLayout = lazy(() => import("@/views/Home"))

import PracticeInput from "@/views/Public/PracticeInput"
import Home from "@/views/Public/Home"
import PracticeMonad from "@/views/Public/PracticeMonad"

// 若 component 尚未載入完成，則顯示 ...
const Suspense = (component: JSX.Element) => (
  <React.Suspense fallback={<>...</>}>{component}</React.Suspense>
)

const environment = process.env.NODE_ENV

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonRoute title="__documentTitleDefault" children={<App />} />,
    children: [
      /* [公開頁面區1 (layout: AppLayout)] */
      {
        element: Suspense(<PublicLayout />),
        children: [
          {
            id: "home",
            index: true,
            element: Suspense(
              <CommonRoute title="__documentTitleLanding" children={<Home />} />
            ),
          },
          {
            id: "Practice Input",
            path: "practice1",
            element: Suspense(
              <CommonRoute
                title="__documentTitleLanding"
                children={<PracticeInput />}
              />
            ),
          },
          {
            id: "Practice Monad",
            path: "practiceMonad",
            element: Suspense(
              <CommonRoute
                title="__documentTitleLanding"
                children={<PracticeMonad />}
              />
            ),
          },
        ],
      },

      /* [公開頁面區2 (layout: none)] */
      { path: "login", element: <div>login</div> },

      /* [需登入畫面區 (layout: AppLayout)] */
      {
        path: "home",
        element: Suspense(<HomeLayout />),
        children: [
          { path: "profile", element: <div>profile</div> },
          { path: "*", element: <Navigate to="profile" replace /> },
        ],
      },
      {
        id: "about",
        path: "about",
        element: <div>about</div>,
      },

      /* [開發專用頁面區] */
      environment === AppEnvEnum.DEVELOPMENT
        ? {
            path: "dev",
            element: Suspense(<DevLayout />),
          }
        : {},

      /* [預設頁面] */
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
])

router.subscribe((routerState) => {
  const title = routerState.location.state?.title || "React App"
  document.title = title
})

export default router
