import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppProvider from "./providers/app-provider";
import ErrorHandlerProvider from "./providers/error-handler-provider";
import LoadingProvider from "./providers/loading-provider";
import ROUTES from "./config/routes";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/not-found"));

const router = createBrowserRouter([
  {
    element: <LoadingProvider />,
    children: [
      {
        element: <ErrorHandlerProvider />,
        children: [
          {
            element: <AppProvider />,
            children: [
              {
                path: ROUTES.HOME,
                element: <Home />,
              },
            ],
          },
        ],
      },
      {
        path: ROUTES.WILDCARD_NOT_FOUND,
        element: <NotFound />,
      },{
        path: ROUTES.NOT_FOUND,
        element: <NotFound />,
      },
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
