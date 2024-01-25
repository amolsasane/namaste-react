## Namaste React

# _Chapter 01 - Inception_

## Q: What is `Emmet`?

Ans: Emmet is designed to `speedup` the process of writing and editing code by providing a set of `shortcuts` that can be quickly expandable to full block of code.

## Q: Difference between a `Library and Framework`?

A: A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.

In simple terms, a `library` is like a set of tools you can use when needed, while a `framework` is like a blueprint guiding how your entire application should be built.

## Q: What is `CDN`? Why do we use it?

A: A `content delivery network (CDN)` - The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

## Q: Why is `React known as React`?

A: `React` is known as "React" because it reflects its core principle of reacting to changes in data. In simple terms, React is a `JavaScript library` for building user interfaces, and its name signifies its ability to efficiently update and `render` components in response to changes in the application's data. The "reactive" nature of React allows developers to create dynamic and interactive user interfaces by updating only the parts of the UI that need to change, rather than re-rendering the entire page. This reactivity is a key aspect of React's declarative and efficient approach to building modern web applications.

## Q: What is `crossorigin in script tag`?

A: In simple terms, the `crossorigin` attribute in a `<script>` tag is used to control how the browser handles loading scripts from different origins (domains).

When you include a script from another domain, the browser might enforce security policies to prevent potential security risks. The `crossorigin` attribute helps you specify how the browser should handle loading the script when it comes from a different origin.

Here are the basic values for the `crossorigin` attribute:

- **Anonymous:**

  - If you set `crossorigin="anonymous"`, the browser will load the script, but it won't include any credentials (like cookies) with the request. This is suitable for scripts that are intended to be public and don't need special permissions.

  ```html
  <script src="https://example.com/script.js" crossorigin="anonymous"></script>
  ```

- **Use Credentials:**

  - If you set `crossorigin="use-credentials"`, the browser will include credentials (like cookies) with the request. This is used when you have permission to access resources on the other domain with credentials.

  ```html
  <script
    src="https://example.com/script.js"
    crossorigin="use-credentials"
  ></script>
  ```

In most cases, you might not need to worry about the `crossorigin` attribute unless you are working with cross-origin resource sharing (CORS) issues. If you're just including scripts from your own domain, you typically don't need to specify the `crossorigin` attribute.

## Q: What is difference between `React and ReactDOM`?

A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
React DOM is like a `Bridge` who connects React and Browser.
The react package contains `React.createElement()`. The react-dom package contains `ReactDOM.render()`.

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?

A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.

## Q: What is `async and defer`?

In web development, `async` and `defer` are attributes used in the `<script>` tag to control how a script is loaded and executed in an HTML document.

- **`async`:**

  - When the `async` attribute is added to a `<script>` tag (e.g., `<script async src="script.js"></script>`), it indicates that the script should be executed asynchronously while the HTML parsing continues. The script will be fetched in the background, and once it's downloaded, it will be executed without waiting for the HTML parsing to complete. This is beneficial for non-blocking scripts that don't depend on the HTML structure.

- **`defer`:**
  - The `defer` attribute (e.g., `<script defer src="script.js"></script>`) also allows asynchronous loading of the script, but with a key difference. The script is executed only after the HTML parsing is complete. Multiple scripts with the `defer` attribute maintain their order of execution. This is useful when the script relies on the structure of the HTML document.
