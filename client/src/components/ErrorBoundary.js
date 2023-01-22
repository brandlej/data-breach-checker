import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

export const ErrorBoundary = ({
  FallbackComponent,
  children,
  fallbackRender,
  fallback,
  onError,
  onReset,
}) => (
  <ReactErrorBoundary
    FallbackComponent={FallbackComponent}
    fallback={fallback}
    fallbackRender={fallbackRender}
    onError={onError}
    onReset={onReset}
  >
    {children}
  </ReactErrorBoundary>
);

ErrorBoundary.displayName = "ErrorBoundary";
