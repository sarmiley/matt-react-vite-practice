import CustomButton from "@/components/CustomButton"
import { Input } from "@mui/base"
import { useCallback, useState } from "react"

const ReplaceSpace = () => {
  const [input, setInput] = useState(" d e f a u l t  v a l u e ")
  const [filteredString, setFilteredString] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  type ReplaceType = "before" | "after" | "beforeAfter" | "middle" | "all"
  const replaceAllSpace = useCallback((type: ReplaceType) => {
    const getRegByType: Record<ReplaceType, RegExp> = {
      before: /^\s*/,
      after: /(\s*$)/g,
      beforeAfter: /^\s*|\s*$/g,
      middle: /\s+/g,
      all: /\s*/g,
    }
    return (str: string): string => {
      let newStr = str.replace(getRegByType[type], "")
      if (type == "middle") {
        const regLeftMatch: RegExpMatchArray | null = str.match(/(^\s*)/g)
        const regRightMatch: RegExpMatchArray | null = str.match(/(\s*$)/g)
        const regLeft: string = regLeftMatch ? regLeftMatch[0] : ""
        const regRight: string = regRightMatch ? regRightMatch[0] : ""
        newStr = regLeft + newStr + regRight
      }
      return newStr
    }
  }, [])

  const handleReplaceAllSpace = useCallback(
    (str: string, type: ReplaceType) => {
      const result = replaceAllSpace(type)(str)
      setFilteredString(result)
    },
    [replaceAllSpace]
  )

  return (
    <>
      <div className="mb-4">
        去掉字串中的空格，要求傳入不同的類型指定去掉前、後、前後、中間的空格
      </div>
      <div>
        <Input
          slotProps={{
            input: {
              className:
                "w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100  focus:shadow-outline-blue  focus:shadow-lg border border-solid border-slate-300 hover:border-blue-500  focus:border-blue-500  text-slate-900 focus-visible:outline-0",
            },
          }}
          placeholder="Type something…"
          value={input}
          onChange={handleChange}
        ></Input>
      </div>

      <div className="my-4">
        replace all space:{" "}
        <span className="text-orange-500 font-bold">【{filteredString}】</span>
      </div>

      <div className="btn-container">
        <CustomButton onClick={() => handleReplaceAllSpace(input, "before")}>
          濾前
        </CustomButton>
        <CustomButton onClick={() => handleReplaceAllSpace(input, "after")}>
          濾後
        </CustomButton>
        <CustomButton
          onClick={() => handleReplaceAllSpace(input, "beforeAfter")}
        >
          濾前後
        </CustomButton>
        <CustomButton onClick={() => handleReplaceAllSpace(input, "middle")}>
          濾中間
        </CustomButton>
        <CustomButton onClick={() => handleReplaceAllSpace(input, "all")}>
          濾全部
        </CustomButton>
      </div>
    </>
  )
}

export default ReplaceSpace
