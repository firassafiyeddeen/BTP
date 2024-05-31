import { Redirect, useRootNavigationState } from "expo-router";

const RouteHandler: React.FC = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  return <Redirect href="/" />;
};

export default RouteHandler;
