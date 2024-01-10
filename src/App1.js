import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./utils/mockData";
import Header from "./components/Header";
import Body from "./components/Body";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const Title = () => {
  return <h1>Namaste React</h1>;
};

//const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
