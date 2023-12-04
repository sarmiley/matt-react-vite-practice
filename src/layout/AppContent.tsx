import { PropsWithChildren } from "react"

type AppContentProps = PropsWithChildren

const AppContent: React.FC<AppContentProps> = (props: AppContentProps) => {
  const { children } = props
  return <div className="p-6">{children}</div>
}

export default AppContent
