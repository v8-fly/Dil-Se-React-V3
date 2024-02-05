import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"

const rootNode = document.getElementById("root")

const root = ReactDOM.createRoot(rootNode)

// const reactElement = React.createElement(
//   "h1",
//   { className: "test" },
//   React.createElement("span", null, "HI SPAN")
// )

const MyComponent = () => {
  const a = 1234
  return (
    <>
      MyComponent
      <Header />
    </>
  )
}

/**
 * Component --- Function that returns a peice of JSX
 * ReactElement - Elements that yopu want to show on browser with childrens and attributes
 *
 * If you wanted to render element youu just gave celement name below
 * root.render(reactElement)
 *
 * But If you wanted to give a Component you gave <MyComponent />
 *
 * React calls your componeny for you
 *
 */

console.log(<MyComponent />)

const reactElement = <h1>Hi Hardik 123</h1>
root.render(<MyComponent />)
