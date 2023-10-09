import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// ==================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';

// import About from './page/About/About';
// import ContactUs  from'./page/Contactus'
// import Home from'./page/Home/Home';
// import BusinessActivites from"./page/BusinessActivites/BusinessActivites";
// import Solution from"./page/Solution/Solution";
// import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<App/>
    
//   },
 
//   {
//     path: "BusinessActivites",
//     element: <BusinessActivites/>,
//   },
  
//   {
//      path: "ContactUs",
//      element: <ContactUs/>,
//    },
//    {
//      path: "About",
//      element: <About/>,
//    },
//    {
//      path: "Solution",
//      element: <Solution/>,
//    },
//    {
//      path: "Home",
//      element: <Home/>,
//    },
// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />

// );


