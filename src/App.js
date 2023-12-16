import React, { useState } from "react";
import { lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
//import * as xyz from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import RestrauntMenu from "./components/RestrauntMenu.js";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";

// import Instamart from "./components/Instamart.js";
const Instamart =lazy(()=>import("./components/Instamart.js"));
import { Provider } from "react-redux";
import store from "./utils/store.js";


// const heading=React.createElement("h1",{id:"title"},"Salaam React From React");
// const heading1=React.createElement("h2",{id:"title1"},"Salaam react From React2");

// const container=React.createElement("div",{id:"container"},[heading,heading1]);

//jsx
            /**
              Header
               -Logo
               -Nav items
               -Cart
              Body
              -SearchBar
              -RestrauntList
                -Restraunt Card (many Cards)
                  -Image
                  -Name
                  -Rating
                  -Cusines
                  -
              Footer
               -Links
               -CopyRight
             
             */


const AppLayout=()=>{

  //This is made for understanding context
  const [user , setUser] =useState({
    name:"Sharique Anjum",
    email:"shariqueanjum05@gmail.com"
  })
  
    return (
       <Provider store={store}>

        <UserContext.Provider value={{
           user:user,

        }}>
          <Header/>
          <Outlet/>
          <Footer/>

          </UserContext.Provider> 

          </Provider> 
        
    )

}

const appRouter =createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error /> ,
    children:[
      {
        path:"/",
        element: <Body/>
      },

      {
        path:"/about",
        element: <About/> ,
        children:[
          {
            path:"profile" ,
            element :<Profile/>

          }

        ]
      },

      {
        path:"/contact" ,
        element: <Contact/>
      },

      {
        path:"/restraunt/:resId" ,
        element : <RestrauntMenu />
      },

      {
        path:"/instamart" ,
        element:<Suspense fallback={<Shimmer/>}>
         <Instamart/>
         </Suspense>
      }

    ]

  },


])





const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);