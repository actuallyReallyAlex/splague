import * as React from "react";

export interface LoadingIndicatorProps {
  isLoading: boolean;
}

/**
 * Displays Loading Indicator.
 */
const LoadingIndicator: React.SFC<LoadingIndicatorProps> = ({ isLoading }) => {
  return (
    <>
      <div className={!isLoading ? "hidden" : "shade"} />
      <div className={!isLoading ? "hidden" : undefined} id="loading-indicator">
        <div className="orbit-spinner">
          <div className="orbit" />
          <div className="orbit" />
          <div className="orbit" />
        </div>
      </div>
    </>
  );
};

export default LoadingIndicator;
