import { selectIsLogin } from "@/store/slices/appSlice"
import useAppSelector from "@/utils/hook/useAppSelector"
import { PropsWithChildren } from "react"
import { Navigate, useLocation } from "react-router-dom"

interface IProps {
  isAuthRequired?: boolean
}

export const AppLayout = ({
  isAuthRequired,
  children,
}: PropsWithChildren<IProps>) => {
  const isLogin = useAppSelector(selectIsLogin)
  const location = useLocation()
  if (isAuthRequired && !isLogin) {
    const currentPath = location.pathname
    return <Navigate to={`/login?redirect_url=${currentPath}`} />
  }

  return (
    <>
      <div className="header header--app">Header</div>
      <main className="content">{children}</main>
      <div className="footer footer--app">Footer</div>
    </>
  )
}
