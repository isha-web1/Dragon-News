import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"} />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
    
  },
  {
     path : '/news/:id',
     element : <NewsDetails/>,
     loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path : 'auth',
    element : <AuthLayout/>,
    children : [
        {
            path : '/auth/login',
            element  : <Login/>
        },
        {
            path : '/auth/register',
            element : <Register/>
        }
    ]
}
]);
