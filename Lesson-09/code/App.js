import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "../code/components/Header.js";
import Body from "../code/components/Body.js";
import About from "../code/components/About.js";
import Contact from "../code/components/Contact.js";
import Error from "../code/components/Error.js";
import ResMenu from "../code/components/ResMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery.js"));

function MyApp() {
  return (
    <div className="my-app">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MyApp />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:ResId",
        element: <ResMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
