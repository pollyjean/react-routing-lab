import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./router/screens/About";
import Main from "./router/screens/Main";
import NotFound from "./router/screens/NotFound";
import Authors from "./router/screens/Authors";
import Book from "./router/screens/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "author/:name",
        element: <Authors />,
        children: [
          {
            path: ":book",
            element: <Book />
          },
          {
            path: ":book/chapters",
          },
          {
            path: ":book/characters",
          }
        ]
      },

    ]
  }
]);

export default router;
