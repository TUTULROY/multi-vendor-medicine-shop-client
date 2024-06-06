import {
    createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import CategoryDetails from "../Home/Category/CategoryDetails/CategoryDetails";
import SignUp from "../Register/SignUp";
import Shops from "../Shop/Shops";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"categoryDetails",
          element:<CategoryDetails></CategoryDetails>
        },
       {
         path:"shop",
         element:<Shops></Shops>

       }
      ]
     
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/signUp",
      element:<SignUp></SignUp>
    }
  ]);


  export default router;