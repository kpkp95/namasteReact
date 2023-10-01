const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste Everyone!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Namaste Everyone!1!"),
    React.createElement("h2", {}, "Namaste Everyone!1!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Namaste Everyone!2!"),
    React.createElement("h2", {}, "Namaste Everyone!2!"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
