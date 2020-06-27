import * as React from "react";
import { connect } from "react-redux";
import { Theme, RootState } from "../../types";

export interface ChatProps {
  theme: Theme;
}

const Chat: React.SFC<ChatProps> = (props: ChatProps) => {
  const { theme } = props;
  return (
    <>
      <p className="title" id="treatment-dialog-title">
        Chat
      </p>
      <p>TREATMENT DIALOG CONTEXT</p>
      <menu className="dialog-menu">
        <button
          className="nes-btn is-primary"
          id="treatment-dialog-primary"
          onClick={() => null}
        >
          PRIMARY
        </button>
        <button
          className="nes-btn"
          id="treatment-dialog-secondary"
          onClick={() => null}
        >
          SECONDARY
        </button>
      </menu>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({ theme: state.ui.theme });

export default connect(mapStateToProps)(Chat);
