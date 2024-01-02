import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import Chef from "../pages/Chef/Chef";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoutes>
            <Chef></Chef>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://chef-s-choice-server.vercel.app/${params.id}`),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
