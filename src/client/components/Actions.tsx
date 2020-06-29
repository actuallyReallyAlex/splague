import * as React from "react";
import { connect } from "react-redux";
import { performAction } from "../redux/thunks";
import { LocationAction, RootState } from "../types";

export interface ActionsProps {
  actions: LocationAction[];
  handlePerformAction: (action: LocationAction) => void;
}

const Actions: React.SFC<ActionsProps> = (props: ActionsProps) => {
  const { actions, handlePerformAction } = props;
  return (
    <div id="actions">
      {actions.map((action: LocationAction) => (
        <button
          className="nes-btn"
          key={action}
          id={`action-${action.replace(/ /gm, "-")}`}
          onClick={() => handlePerformAction(action)}
        >
          {action}
        </button>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({ actions: state.map.actions });

const mapDispatchToProps = (dispatch) => ({
  handlePerformAction: (action: LocationAction) =>
    dispatch(performAction(action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
