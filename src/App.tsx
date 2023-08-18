import { Outlet } from "react-router-dom"
import { LoadingMask } from "./layout/LoadingMask"
import useAppSelector from "./utils/hook/useAppSelector"

function App() {
  const loadingCounter = useAppSelector(
    (state) => state.app.loadingApiList.length
  )
  return (
    <>
      {/* <loading /> */}
      {loadingCounter > 0 && <LoadingMask />}
      <Outlet />
    </>
  )
}

export default App
