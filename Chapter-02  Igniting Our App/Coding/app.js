// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "This is Namste React🚀"),
        React.createElement("h2", {}, "By Akshay Saini")]
    )],
    [React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "Hi,I'm H1 Tag from child 2"),
    React.createElement("h2", {}, "This is H2 Tag")]
)]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);