import { pipe } from "fp-ts/lib/function"

export default function PracticeMonad() {
  const dataArray = [1, null, 2, undefined, 3, 4, 5, 6]

  // 未使用 Option或Maybe Monad 的寫法
  const filterNumbers = (data: Array<unknown>): Array<number> =>
    data.filter((item) => typeof item === "number") as Array<number>

  const multiplyByTwo = (numbers: Array<number>): Array<number> =>
    numbers.map((num) => num * 2)

  const result = pipe(dataArray, filterNumbers, multiplyByTwo).reduce(
    (acc, item) => (acc ? `${acc}, ${item}` : `${item}`),
    ""
  )

  return (
    <div>
      <h1 className="text-3xl text-blue-700">[{result}]</h1>
    </div>
  )
}
