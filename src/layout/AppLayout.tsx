import Footer from "@/layout/Footer"
import Header from "@/layout/Header"
import Navbar from "@/layout/Navbar"
import AppContent from "@/layout/AppContent"

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
    <div className="container mx-auto px-8 ">
      <Header />
      <div className="flex">
        <Navbar />
        <AppContent children={children} />
      </div>
      <Footer />
    </div>
  )
}
