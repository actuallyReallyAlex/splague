import * as React from "react";
import LoadingIndicator from "./components/LoadingIndicator";

/**
 * Application.
 */
const App: React.SFC<{}> = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div id="app">
      <h1>splague</h1>
      <LoadingIndicator isLoading={isLoading} />
    </div>
  );
};

export default App;
