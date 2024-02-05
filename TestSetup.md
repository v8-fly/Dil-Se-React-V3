Jest initial config - https://jestjs.io/docs/getting-started

1. npm install --save-dev jest
2. npm install --save-dev @testing-library/react
3. "scripts": {
   "test": "jest"
   },
4. npm init jest@latest --- environment -jsdom , instrument - babel
5. npm install --save-dev babel-jest @babel/core @babel/preset-env
6. babel.config.js --
   module.exports = {
   presets: [["@babel/preset-env", { targets: { node: "current" } }]],
   }
   7.Parcel comes with babel by default , now our babel.rc witll conflict with parcel hence
   go to parcels docs and check https://parceljs.org/languages/javascript/#usage-with-other-tools

we need .parcelrc
8.npm install -D jest-environment-jsdom 9. npm run test - No test found --->> **/**tests**/**/_.[jt]s?(x), \*\*/?(_.)+(spec|test).[tj]s?(x) 10. create sum.js and **test** > sum.test.js 11. you will see it passing 12. you create a normal React component and try to test using render(<Component/>)
test fails saying - 'jsx' isn't currently enabled
Add @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation. 13. npm install --save-dev @babel/preset-react 14. in babel.rc add @babel/preset-react
module.exports = {
presets: [
["@babel/preset-env", { targets: { node: "current" } }],
[
"@babel/preset-react",
{
runtime: "automatic",
},
],
],
} 15. toBeInTheDocument is not part of RTL. You need to install jest-dom to enable it. 16. npm install --save-dev @testing-library/jest-dom
import '@testing-library/jest-dom' in test case
