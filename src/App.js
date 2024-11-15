import React, {lazy, Suspense, useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/UserContext";

// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    const [userInfo, setUserInfo] = useState(null);


    // authentication from username and password
    useEffect(() => {
        //Api response from authentication
        const data = {
            name: 'Dhanush',
            dob: '24-10-1999',
            role: 'Software Engineer'
        }
        setUserInfo(data?.name)
    }, [])
    return (
        // Dhanush
      <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
        <div className="App">
          {/* <UserContext.Provider value={{loggedInUser:userInfo, setUserInfo}}> */}

            {/* Vamshi */}
            
            <Header />
          {/* </UserContext.Provider> */}
          {/* outlet is used to define where to render child routes */}
          <Outlet />
        </div>
      </UserContext.Provider>
    );
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
            },
            {
                path:'grocery',
                element:<Suspense fallback={<><h1>Loading...</h1></>}><Grocery /></Suspense>               
            }
        ],
        errorElement: <Error />
    }
]);
// RouterProvider => to provide routing configuration to app
root.render(<RouterProvider router={appRouter} />)
