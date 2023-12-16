const heading = React.createElement("h1", {
    id: "title"
}, "Salaam React From React");
const heading1 = React.createElement("h2", {
    id: "title1"
}, "Salaam react From React2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading1
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
