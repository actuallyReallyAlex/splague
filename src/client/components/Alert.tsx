import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../types";

export interface AlertProps {
  content: string;
  primaryAction: () => void;
  primaryActionText: string;
  secondaryAction: () => void;
  secondaryActionText: string;
  title: string;
}

const Alert: React.SFC<AlertProps> = (props: AlertProps) => {
  const {
    content,
    primaryAction,
    primaryActionText,
    secondaryAction,
    secondaryActionText,
    title,
  } = props;
  return (
    <dialog className="nes-dialog" id="alert">
      <form method="dialog">
        <p className="title">{title}</p>
        <p>{content}</p>
        <menu className="dialog-menu">
          <button
            className="nes-btn is-primary"
            id="alert-primary"
            onClick={() => primaryAction()}
          >
            {primaryActionText}
          </button>
          <button
            className="nes-btn"
            id="alert-secondary"
            onClick={() => secondaryAction()}
          >
            {secondaryActionText}
          </button>
        </menu>
      </form>
    </dialog>
  );
};

const mapStateToProps = (state: RootState) => ({
  content: state.alert.content,
  primaryAction: state.alert.primaryAction,
  primaryActionText: state.alert.primaryActionText,
  secondaryAction: state.alert.secondaryAction,
  secondaryActionText: state.alert.secondaryActionText,
  title: state.alert.title,
});

export default connect(mapStateToProps)(Alert);
