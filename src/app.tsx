import { lazy } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import AppProvider from "./providers/app-provider";
import ErrorHandlerProvider from "./providers/error-handler-provider";
import LoadingProvider from "./providers/loading-provider";
import ROUTES from "./config/routes";

const Home = lazy(() => import("./pages/home"));
const ErrorFound = lazy(() => import("./pages/error-found"));

const router = createHashRouter([
  {
    element: <ErrorHandlerProvider />,
    children: [
      {
        element: <LoadingProvider />,
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
        element: <ErrorFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
