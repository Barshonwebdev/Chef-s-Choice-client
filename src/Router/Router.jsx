import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import Chef from "../pages/Chef/Chef";

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
        path:'/chefs/:id',
        element: <Chef></Chef>,
        loader: ({params})=> fetch (`http://localhost:5000/chefs/${params.id}`)
      },
      {
        path:"*",
        element:<NotFound></NotFound>
      }
    ],
  },
]);

export default router;