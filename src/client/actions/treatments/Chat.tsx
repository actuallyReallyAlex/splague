import * as React from "react";
import { connect } from "react-redux";
import { Theme, RootState } from "../../types";

export interface ChatProps {
  theme: Theme;
}

const Chat: React.SFC<ChatProps> = (props: ChatProps) => {
  const { theme } = props;
  return (
    <div>
      <span>CHAT</span>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({ theme: state.ui.theme });

export default connect(mapStateToProps)(Chat);
