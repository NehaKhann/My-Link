import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import data from "./Data.jsx";

ReactDOM.render(
  data.map((value) => (
    <App
      icon={value.icon}
      link={value.link}
      name={value.name}
      des={value.des}
    />
  )),
  document.getElementById("root")
);
