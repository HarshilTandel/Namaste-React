import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";

// Lazy loading the components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantDetails = lazy(() => import("./components/RestaurantDetails"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { 
        path: "/about", 
        element: (
          <Suspense fallback={<h1>Loading About...</h1>}>
            <About />
          </Suspense>
        ) 
      },
      { 
        path: "/contact", 
        element: (
          <Suspense fallback={<h1>Loading Contact...</h1>}>
            <Contact />
          </Suspense>
        ) 
      },
      { 
        path: "/restaurant/:city/:name/info", 
        element: (
          <Suspense fallback={<h1>Loading Restaurant Details...</h1>}>
            <RestaurantDetails />
          </Suspense>
        ) 
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
