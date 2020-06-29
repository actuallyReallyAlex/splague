import * as React from "react";
import { connect } from "react-redux";
import { RootState, Theme } from "../types";

export interface AlertProps {
  content: string;
  isOpen: boolean;
  primaryAction: () => void;
  primaryActionText: string;
  secondaryAction: () => void;
  secondaryActionText: string;
  theme: Theme;
  title: string;
}

const Alert: React.SFC<AlertProps> = (props: AlertProps) => {
  const {
    content,
    isOpen,
    primaryAction,
    primaryActionText,
    secondaryAction,
    secondaryActionText,
    theme,
    title,
  } = props;
  return (
    <div className={`dialog-container ${isOpen ? "" : "hidden"}`}>
      <dialog
        className={`dialog-inner nes-dialog ${
          theme === "dark" ? "is-dark" : ""
        }`}
        id="alert"
      >
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
            {secondaryActionText && (
              <button
                className="nes-btn"
                id="alert-secondary"
                onClick={() => secondaryAction()}
              >
                {secondaryActionText}
              </button>
            )}
          </menu>
        </form>
      </dialog>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  content: state.alert.content,
  isOpen: state.alert.isOpen,
  primaryAction: state.alert.primaryAction,
  primaryActionText: state.alert.primaryActionText,
  secondaryAction: state.alert.secondaryAction,
  secondaryActionText: state.alert.secondaryActionText,
  theme: state.ui.theme,
  title: state.alert.title,
});

export default connect(mapStateToProps)(Alert);
