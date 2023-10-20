import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameDetail from "./pages/GameDetail";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetail /> },
    ],
  },
]);

export default router;
