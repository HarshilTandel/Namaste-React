# Namaste React Course by Akshay Saini
## Chapter 01 - Inception

### Q: What is Emmet?
**A:**Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow.

### Q: Difference between a Library and Framework?
**A:**Both the framework vs library is precoded support programs to develop complex software applications. However, libraries target a specific functionality, while a framework tries to provide everything required to develop a complete application.

### Q: What is CDN? Why do we use it?
**A:**A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.

### Q: Why is React known as React?\
**A:**React is aptly named because: It "reacts" quickly to changes without reloading the whole page. It uses the virtual DOM to efficiently update parts of a webpage. It's built around components that "react" and update.

### Q: What is `crossorigin` in the script tag?
**A:**It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

**Syntax:**
```html
<script crossorigin="anonymous|use-credentials"></script>


### Q: What is the difference between React and ReactDOM?
**A:**In simple terms, React is like the architect who designs how things should look, and ReactDOM is the construction worker who puts those designs into action on a website. If you're building web pages with React, you use both React and ReactDOM.


### Q: Q: What is the difference between `react.development.js` and `react.production.js` files via CDN?
**A:**js - More developer friendly, readable, will take more size. react. production. js - Minified code that is not developer friendly as it focused on decreasing in file size, code efficiency


### Q: What are `async` and `defer`?
**A:**async and defer both load JavaScript asynchronously without render blocking, but async executes as soon as possible and in no particular order while defer runs in sequence toward the end of the loading process, just before the DOMContentLoaded event.

**Syntax:**
```html
<script src="demo_async.js" async></script>

**Defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM

**Syntax:**
```html
<script src="demo_defer.js" defer></script>

**Unless you're supporting ancient legacy systems, always add type="module" to all your script tags:

```html
<script type="module" src="main.js"></script>

```html
<script defer nomodule src="fallback.js"></script>

### Q: References:
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [YouTube Video on async and defer](https://www.youtube.com/watch?v=IrHmpdORLu8)


