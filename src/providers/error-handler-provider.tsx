import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

const ErrorFound = lazy(() => import("../pages/error-found"));

function ErrorHandlerProvider() {
  return (
    <ErrorBoundary fallbackRender={props => <ErrorFound {...props} />}>
      <Outlet />
    </ErrorBoundary>
  );
}

export default ErrorHandlerProvider;
