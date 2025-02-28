import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import SettingsPage from "./pages/settingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MiniDrawer from "./layout/Layout";
import SubscripePage from "./pages/subscripePage/SubscripePage";
import Team from "./pages/team/Team";
import Info from "./pages/info/Info";
import Recipt from "./pages/recipt/Recipt";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MiniDrawer />, 
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: "team",
        element: <Team />, 
      },
      {
        path: "info",
        element: <Info />, 
      },
      {
        path: "recipt",
        element: <Recipt />, 
      },
      {
        path: "subscripe",
        element: <SubscripePage />, 
      },
      {
        path: "settings",
        element: <SettingsPage />, 
      },
      {
        path: "*",
        element: <NotFoundPage />, // 404 page
      },
    ],
  },
]);
console.log(router.routes, "router");
const returnRoutesUrls = () => {
  let urls = [];
  router.routes.forEach((route) => {
    urls.push({
      path: route.path,
      UrlName: route.path,
    });
  });
  return urls;
}
function RouterWebsite() {
  return <RouterProvider router={router} />;
}

export default RouterWebsite;
