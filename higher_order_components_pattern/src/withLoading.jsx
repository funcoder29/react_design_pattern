import { Spinner } from "./Spinner.jsx";

export const withLoading = (WrappedComponent) => {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <Spinner />;
    return <WrappedComponent {...props} />;
  };
};
