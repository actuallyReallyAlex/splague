import * as React from "react";
import { connect } from "react-redux";

/**
 * Displays Loading Indicator.
 */
const LoadingIndicator: React.SFC<{ isLoading: boolean }> = ({ isLoading }) => {
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

const mapStateToProps = ({ ui }) => ({ isLoading: ui.isLoading });

export default connect(mapStateToProps)(LoadingIndicator);
