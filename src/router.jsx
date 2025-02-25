import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SettingsPage from "./pages/settingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MiniDrawer from "./layout/Layout";

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
