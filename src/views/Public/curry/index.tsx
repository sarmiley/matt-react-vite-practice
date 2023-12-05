import { CodeBlock, rainbow } from "react-code-blocks"

const Curry: React.FC = () => {
  const addCurriedClassic = (x: number) => (y: number) => x + y
  const add2 = addCurriedClassic(2)

  const greetCurriedClassic =
    (greeting: string) => (firstName: string) => (lastName: string) =>
      `${greeting}, ${firstName} ${lastName}`

  const greetHello = greetCurriedClassic("Hello")

  return (
    <>
      <div>Curry 練習</div>
      <p className="my-4 ">
        透過curry可以將一個function拆成多個function，並且可以將參數分開傳入，例如下列範例，我們可以先傳入一個參數2，再傳入另一個參數3，最後得到5
      </p>
      <div className="pl-10 my-4 ">
        <CodeBlock
          theme={rainbow}
          text={`const addCurriedClassic = (x: number) => (y: number) => x + y
const add2 = addCurriedClassic(2)
const result = add2(3) // ${add2(3)}`}
          language="typescript"
          showLineNumbers={true}
        />
      </div>
      <p className="my-4 ">又或者可以利用下列範例做成一個固定的招呼語</p>
      <div className="pl-10 my-4 ">
        <CodeBlock
          theme={rainbow}
          text={`const greetCurriedClassic = (greeting: string) =>
          (firstName: string) => (lastName: string) => \`\${greeting}, \${firstName} \${lastName}\`
const greetHello = greetCurriedClassic('Hello')
const result = greetHello('Matt')('Liu') // ${greetHello("Matt")("Liu")}`}
          language="typescript"
          showLineNumbers={true}
        />
      </div>

      <p>
        可以透過一個function建立後續延伸的使用，例如常見的Modal、error
        handle等，可以設計成基礎進而延伸的function就可以利用此方式來設計。
      </p>
    </>
  )
}

export default Curry
