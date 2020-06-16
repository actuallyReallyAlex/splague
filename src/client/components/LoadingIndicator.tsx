import * as React from "react";
import StateContext from "../context/state";

/**
 * Displays Loading Indicator.
 */
const LoadingIndicator: React.SFC<{}> = () => {
  return (
    <StateContext.Consumer>
      {({ isLoading }) => (
        <>
          <div className={!isLoading ? "hidden" : "shade"} />
          <div
            className={!isLoading ? "hidden" : undefined}
            id="loading-indicator"
          >
            <div className="orbit-spinner">
              <div className="orbit" />
              <div className="orbit" />
              <div className="orbit" />
            </div>
          </div>
        </>
      )}
    </StateContext.Consumer>
  );
};

export default LoadingIndicator;
