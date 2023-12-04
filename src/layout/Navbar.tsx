import router from "@/router"
import React from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  const { routes } = router
  const practicesRoutes =
    routes[0].children?.[0].children?.filter((route) => {
      return route.index
        ? { path: "/", title: route.id }
        : { path: route.path, title: route.id }
    }) ?? []

  return (
    <div className="navbar">
      <ul>
        {practicesRoutes.map((item, index) => {
          return (
            <li key={index}>
              <Link className="p-1 text-blue-500" to={item.path ?? "/"}>
                {item.id}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
