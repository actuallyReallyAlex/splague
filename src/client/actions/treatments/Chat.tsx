import * as React from "react";
import { connect } from "react-redux";
import { isOdd } from "../../util";
import { Theme, RootState } from "../../types";

export interface ChatProps {
  chat: string[];
  theme: Theme;
}

const Chat: React.SFC<ChatProps> = (props: ChatProps) => {
  const { chat, theme } = props;
  return (
    <>
      <p className="title" id="treatment-dialog-title">
        Chat
      </p>

      <section className={`nes-container ${theme === "dark" ? "is-dark" : ""}`}>
        <section className="message-list" id="chat-messages">
          {chat.map((chatItem: string, i: number) => (
            <section
              className={`message ${isOdd(i) ? "-right" : "-left"}`}
              key={`chat-${i}`}
            >
              {isOdd(i) ? (
                <>
                  <div
                    className={`nes-balloon from-right ${
                      theme === "dark" ? "is-dark" : ""
                    }`}
                  >
                    <p>{chatItem}</p>
                  </div>
                  <i className="nes-bcrikko" />
                </>
              ) : (
                <>
                  <i className="nes-bcrikko" />
                  <div
                    className={`nes-balloon from-left ${
                      theme === "dark" ? "is-dark" : ""
                    }`}
                  >
                    <p>{chatItem}</p>
                  </div>
                </>
              )}
            </section>
          ))}
        </section>
      </section>

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

const mapStateToProps = (state: RootState) => ({
  chat: state.patient.chat,
  theme: state.ui.theme,
});

export default connect(mapStateToProps)(Chat);
