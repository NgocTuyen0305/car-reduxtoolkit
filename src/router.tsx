import { createBrowserRouter, Outlet,Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signin from "./features/auth/pages/Signin";
import Signup from "./features/auth/pages/Signup";
import AdminLayout from "./features/admin/pages/AdminLayout";
import Products from "./features/admin/pages/Products";
import EditProducts from "./features/admin/pages/EditProducts";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { index: true, element: <Homepage/> },
      { path: "products", element: <ProductList /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "signin", element: <Signin/> },
      { path: "signup", element: <Signup/>   },
    ],
  },
  {
    path: "/admin",
    element: (
      <div className="">
        <AdminLayout/>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="product" />,
      },
      {
        path: "product",
        element: <Products/>,
      },
      {
        path: "product/:id/edit",
        element: <EditProducts/>,
      },
      {
        path: "product/:idProduct",
        element: <div className="">Product Detail</div>,
      },
    ],
  },
]);
