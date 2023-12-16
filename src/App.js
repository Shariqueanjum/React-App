import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
//import * as xyz from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"

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
  
    return (
        <React.Fragment>
          <Header/>
          <Body/>
          <Footer/>


        </React.Fragment>
        
    )

}





const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout />);