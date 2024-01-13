const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "test",
    random: Math.random(),
  },
  "Hello World From React"
)
console.log(heading)
/**
 * {
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "heading",
        "className": "test",
        "random": 0.9597999367600845,
        "children": "Hello World From React"
    },
    "_owner": null,
    "_store": {}
}
 */

// props are childrens + attributes we pass

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

// step 1 -  create React Element
// step 2 -  To Render that element which is a object pass this object to render function of reactDom

// Render function will create actual elememts for you and put that in DOM
