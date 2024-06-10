import {
    createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import CategoryDetails from "../Home/Category/CategoryDetails/CategoryDetails";
import SignUp from "../Register/SignUp";
import Shops from "../Shop/Shops";
import MedicineDetails from "../MedicineDetails/MedicineDetails";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUser from "../component/AllUser";


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
          path:"categoryDetails/:category",
          element:<CategoryDetails></CategoryDetails>
        },
       {
         path:"shop",
         element:<Shops></Shops>

       },
       {
        path:'/detailsPage/:id',
        element:<MedicineDetails></MedicineDetails>
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
    },
    {
      path:'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'allUser',
          element:<AllUser></AllUser>
        }
      ]
    }
  ]);


  export default router;