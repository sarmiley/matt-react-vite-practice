import { Button } from "@mui/base/Button"
import { useCallback, useState } from "react"

const Recursion = () => {
  const [arr, setArr] = useState(Array<number>(5))

  const addNumNoSame = useCallback(
    (arr: Array<number>, index: number): Array<number> => {
      const newArr = [...arr]
      if (newArr.length <= index) return newArr
      const num = Math.floor(Math.random() * 32) + 1
      if (newArr.includes(num))
        return addNumNoSame(newArr, index).sort((a, b) => a - b)
      newArr.fill(num, index, index + 1).sort((a, b) => a - b)
      return addNumNoSame(newArr, index + 1).sort((a, b) => a - b)
    },
    []
  )

  const handleClick = () => setArr(addNumNoSame(arr, 0).sort((a, b) => a - b))

  return (
    <>
      <div>
        <p>題目描述：</p>
        <p>
          用遞歸演算法實現（限制15行程式碼以內實現；限制時間10分鐘內完成）：
        </p>
        <ul className="pl-4">
          <li>a) 產生一個長度為5的空數組arr。</li>
          <li>b) 產生一個（2－32）之間的隨機整數rand。</li>
          <li>
            c)
            將隨機數rand插入數組arr內，如果數組arr內已存在與rand相同的數字，則重新生成隨機數rand並插入到arr內[需要使用遞歸實現，不能使用for/while等循環]
          </li>
          <li>d) 最終輸出一個長度為5，且內容不重複的陣列arr。</li>
        </ul>
      </div>
      <div className="my-4">
        [
        {arr.map((item, index) => {
          return index === arr.length - 1 ? (
            <span key={index}>{item}</span>
          ) : (
            <span key={index}>{item}, </span>
          )
        })}
        ]
      </div>
      <div>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          產生
        </Button>
      </div>
    </>
  )
}

export default Recursion
