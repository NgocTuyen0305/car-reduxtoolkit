import {
  createBrowserRouter,
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";
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
import Dashboard from "./features/admin/pages/Dashboard";
import PrivateRoute from "./components/PrivateRouter";



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
      { index: true, element: <Homepage /> },
      { path: "products", element: <ProductList /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    path: "/admin",
    element: <PrivateRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="dashboard" />,
          },
          {
            path: "product",
            element: <Products />,
          },
          {
            path: "product/:id/edit",
            element: <EditProducts />,
          },
          {
            path: "/admin/dashboard",
            element: <Dashboard />,
          },
          {
            path: "product/:idProduct",
            element: <div className="">Product Detail</div>,
          },
        ],
      },
    ],
  },
]);
