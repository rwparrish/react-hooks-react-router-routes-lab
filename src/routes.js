import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorsPage from "./pages/ErrorsPage";


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorsPage />
  },
  {
    path: "/movie/:title",
    element: <Movie />,
    errorElement: <ErrorsPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorsPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorsPage />
  }
];

export default routes;