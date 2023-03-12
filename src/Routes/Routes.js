import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddProducts from "../Pages/AddProducts/AddProducts";
import EditProduct from "../Pages/EditProduct/EditProduct";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import SignUp from "../Pages/SignUp/SignUp";
import Trash from "../Pages/Trash/Trash";
import ViewProduct from "../Pages/ViewProduct/ViewProduct";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Products></Products>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-products",
        element: (
          <PrivateRoutes>
            <AddProducts></AddProducts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bin",
        element: (
          <PrivateRoutes>
            <Trash></Trash>
          </PrivateRoutes>
        ),
      },
      {
        path: "product/view/:id",
        element: (
          <PrivateRoutes>
            <ViewProduct></ViewProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/edit/:id",
        element: <EditProduct></EditProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
