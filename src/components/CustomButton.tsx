import { Button } from "@mui/base"
import { MouseEventHandler, PropsWithChildren } from "react"

const CustomButton = ({
  onClick,
  ...prop
}: PropsWithChildren<{ onClick: MouseEventHandler<HTMLButtonElement> }>) => {
  return (
    <Button
      onClick={onClick}
      {...prop}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
    />
  )
}

export default CustomButton
