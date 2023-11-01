import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/categories",
        element: <Categories></Categories>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path:"*",
        element:<NotFound></NotFound>
      }
    ],
  },
]);

export default router;