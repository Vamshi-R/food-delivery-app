import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            {/* outlet is used to define where to render child routes */}
            <Outlet /> 
        </div>
    )
}
const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout />); 

// we use createBrowserRouter for configuring a route
const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        children: [
            {
                path:'/',
                element:<Body />
            },
            {
                path:'about',
                element:<About />
            },
            {
                path:'contact',
                element:<Contact />
            },
            {
                path:'restaurant/:resId',
                element:<RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);
// RouterProvider => to provide routing configuration to app
root.render(<RouterProvider router={appRouter} />)
