# React 18

## 開發環境

- node: `>=18.7.0`
- npm: `>=8.15.0`
- Source-code editor: [Visual Studio Code](https://code.visualstudio.com/)
- Visual Studio Code recommended Plugins:

  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) : 程式碼檢查
  - [StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) : 樣式代碼檢查
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) : 拼寫檢查
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscod) : 程式碼 format
  - [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) : 檔案路徑自動補齊
  - [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete) : 檔案路徑自動補齊
  - [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) : React 生成語法和代碼片段，常用代碼片段

    ```javascript
      imr → import React from 'react'
      imrd → import ReactDOM from 'react-dom'
      rafce →
              import React from 'react'
              const Card = () => {
                  return (
                      <div>

                      </div>
                  )
              }

              export default Card
      rfc →
            import React from 'react'
            export default function test() {
                return (
                    <div>

                    </div>
                )
            }
    ```

    **如何快速安裝 Visual Studio Code recommended Plugin？**
    ![安裝方式](src/assets/images/install-vscode-plugins.gif)

- Chrome dev Tools
  - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## 相關 NPM 套件

The project is using several packages to take care of each requirement as below:

- [React Router](https://reactrouter.com/en/main) : 路由控制
- [React i18n](https://react.i18next.com/) : 多國語系
- [Redux Toolkit](https://redux-toolkit.js.org/) : 全域狀態控制、API 管理(RTK Query)
- [Redux Logger](https://github.com/LogRocket/redux-logger) : redux 狀態的追蹤 Middleware
- [React-use](https://github.com/streamich/react-use) : React Hook 集合
- [Formik](https://formik.org/) : 表單控制器
- [Yup](https://github.com/jquense/yup) : 欄位驗證
- [msw](https://mswjs.io/) : mock API
- [sass](https://github.com/sass/dart-sass) : 樣式預處理器
- [date-fns](https://date-fns.org/) : date utility library
- [lodash](https://lodash.com/) : JavaScript utility library
- [husky](https://typicode.github.io/husky/) : git hook
- [lint-staged](https://github.com/okonet/lint-staged) : 針對暫存的 git 文件運行 linter

## 環境檔

src/environment

- `.env` mock 測試環境
- `.env.sit` SIT 環境
- `.env:uat` UAT 環境
- `.env:prod` 正式區環境

## NPM Scripts

- **開發測試環境**
  1. `npm run dev` 啟動 mock 開發測試環境
  2. `npm run dev:sit` 啟動 SIT 開發測試環境
  3. `npm run dev:uat` 啟動 UAT 開發測試環境
  4. `npm run dev:prod` 啟動正式區測試環境
- **代碼檢查**
  1. `npm run lint` 檢查程式碼與樣式代碼
  2. `npm run lint:ts` 檢查程式碼
  3. `npm run lint:styles` 檢查樣式代碼
  4. `npm run prettier` 進行檔案 format
- **打包檔案**
  1. `npm run build:dev` 打包 mock 開發測試檔案
  2. `npm run build:sit` 打包華產開發測試檔案
  3. `npm run build:uat` 打包公司開發測試檔案
  4. `npm run build:prod` 打包公司開發測試檔案
