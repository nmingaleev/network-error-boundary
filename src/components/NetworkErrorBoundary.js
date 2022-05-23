import { useState, useEffect } from 'react';

export const NetworkErrorBoundary = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!window) return;

    const handler = (event) => {
      event.preventDefault();

      setHasError(true);
    };

    window.addEventListener('unhandledrejection', handler);

    return () => {
      window.removeEventListener('unhandledrejection', handler);
    };
  }, []);

  return hasError ? fallback : children;
}