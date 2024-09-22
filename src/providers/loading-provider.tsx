import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function LoadingProvider() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            opacity: 0,
            transition: "opacity 0.3s ease-in-out"
          }}
        >
          Loading...
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
}

export default LoadingProvider;
