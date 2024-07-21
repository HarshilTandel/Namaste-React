import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/componrnts/Header";
import Body from "../src/componrnts/Body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
