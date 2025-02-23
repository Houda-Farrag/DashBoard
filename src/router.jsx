import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SettingsPage from "./pages/settingsPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);

function RouterWebsite() {
  return <RouterProvider router={router} />;
}

export default RouterWebsite;
