import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../code/components/Header.js";
import Body from "../code/components/Body.js";
import About from "../code/components/About.js";
import Contact from "../code/components/Contact.js";
import Error from "../code/components/Error.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function MyApp() {
  return (
    <div className="my-app">
      <Header />
      <Body />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MyApp />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
