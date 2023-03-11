import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Trash from "../Pages/Trash/Trash";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/",
        element: <Products></Products>,
      },
      {
        path: "/add-products",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/bin",
        element: <Trash></Trash>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
