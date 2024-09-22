import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import ErrorFound from "../pages/error-found";

function ErrorHandlerProvider() {
  return (
    <ErrorBoundary fallbackRender={props => <ErrorFound {...props} />}>
      <Outlet />
    </ErrorBoundary>
  );
}

export default ErrorHandlerProvider;
