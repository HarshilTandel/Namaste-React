## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation Coding Assignment


## Q: Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
```
const header = React.createElement("div",{className:"title"},
    React.createElement("h1",{},"Hello,I'M H1 Tag"),
    React.createElement("h2",{},"Hello,I'M H2 Tag"),
    React.createElement ("h3",{},"Hello,I'M H3 Tag"));
    
    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(header);

```


## Q: Create the `same element using JSX`
```
const HeadingForjsx = () => (
    <div className="title">
        <h1>Hi,I'M h1 From jsx</h1>
        <h2>Hi,I'M h2 From jsx</h2>
        <h3>Hi,I'M h3 From jsx</h3>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingForjsx/>);
```


## Q: Create a `functional component of the same with JSX`
```
const HeadingForjsx2 = () => {
    return (
    <div className="title">
        <h1>Hi,I'M h1 From jsx with functional component</h1>
        <h2>Hi,I'M h2 From jsx with functional component</h2>
        <h3>Hi,I'M h3 From jsx with functional component</h3>
    </div> 
    );

};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingForjsx2/>);
```


## Q: Pass `attribute into the tag in JSX`
```
const HeadingForjsx3 = () => {
    return (
    <div className="title">
        <h1  style={{color:"red"}}>Hi,I'M h1 From jsx with functional component</h1>
        <h2  style={{color:"green"}}>Hi,I'M h2 From jsx with functional component</h2>
        <h3  style={{color:"blue"}}>Hi,I'M h3 From jsx with functional component</h3>
    </div> 
    );

};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingForjsx3/>);

```


## Q: `Composition of Component` (Add a component inside another)
```
const Elm = <span>Hi i am here for Composition with span</span>

const Deatil = () => (
    <div className="deatil">
        <p>Hi i am here for Composition with p1</p>
        {Elm}
        <p>Hi i am here for Composition with p2</p>
    </div>
)

const HeadingForjsx4 = () => {
    return (
    <div className="title">
        <h1  style={{color:"red"}}>Hi,I'M h1 From jsx with functional component</h1>
        <h2  style={{color:"green"}}>Hi,I'M h2 From jsx with functional component</h2>
        <Deatil/>
        <h3  style={{color:"blue"}}>Hi,I'M h3 From jsx with functional component</h3>
    </div> 
    );

};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingForjsx4/>);
```


## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
```
const element = <span>This is React element</span>

const TitleElement = () => {
    return <h2 style={{ color: "red" }}>This Title Element</h2>;
  };

  const Header = () => {
    return (
      <div className="Title" key="title">
        {element}
        <h1 style={{ color: "blue" }} key="h1">
          This is h1 tag
        </h1>
        <TitleElement/>
        <h2 style={{ color: "palevioletred" }} key="h2">
          This is h2 tag
        </h2>
        <TitleElement></TitleElement>
        <h3 style={{ color: "green" }} key="h3">
          This is h3 tag
        </h3>
      </div>
    );
  };
  const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
```


## Q: Create a `Header Component from scratch` using `Functional Component with JSX`
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice

```
import React from "react";
import ReactDOM from "react-dom/client";


const logoPath = "https://i.postimg.cc/0Q3h3JqR/removal-ai-e03ac686-5d3a-4310-8775-c53eadea19f5-screenshot-from-2024-06-28-15-04-26.png";
const userPath = "https://i.postimg.cc/XJXTQkmk/images.png";

const Header = () => {
    return (
        <header className="header-component">
            <div id="logo">
                <img src={logoPath} alt="logo" />
            </div>
            <div id="search-box">
                <input type="text" placeholder="Search anything..." />
                <button type="submit">Submit</button>
            </div>
            <div id="user">
                <img src={userPath} alt="user" />
            </div>
        </header>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
```

## [Create a Header Component from scratch using Functional Component with JSX 🚀 Live Project App Link 😍](https://foodfire-chapter03.netlify.app/)