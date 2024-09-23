import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function LoadingProvider() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Outlet />
    </Suspense>
  );
}

export default LoadingProvider;
