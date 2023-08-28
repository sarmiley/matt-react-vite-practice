import router from "@/router"
import { Link } from "react-router-dom"

export default function Header() {
  const { routes } = router
  const practicesRoutes =
    routes[0].children?.[0].children?.filter((route) => {
      return route.index
        ? { path: "/", title: route.id }
        : { path: route.path, title: route.id }
    }) ?? []

  return (
    <div className="header header--app">
      <div className="flex justify-start">
        {practicesRoutes.map((item, index) => {
          return (
            <div key={index}>
              <Link className="p-1 text-blue-500" to={item.path ?? "/"}>
                {item.id}
              </Link>
              {index !== practicesRoutes.length - 1 && "|"}
            </div>
          )
        })}
      </div>
    </div>
  )
}
