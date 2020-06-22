import * as React from "react";
import { connect } from "react-redux";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

/**
 * Displays Loading Indicator.
 */
const LoadingIndicator: React.SFC<LoadingIndicatorProps> = (
  props: LoadingIndicatorProps
) => {
  return (
    <>
      <div className={!props.isLoading ? "hidden" : "shade"} />
      <div
        className={!props.isLoading ? "hidden" : undefined}
        id="loading-indicator"
      >
        <div className="orbit-spinner">
          <div className="orbit" />
          <div className="orbit" />
          <div className="orbit" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ ui }) => ({ isLoading: ui.isLoading });

export default connect(mapStateToProps)(LoadingIndicator);
