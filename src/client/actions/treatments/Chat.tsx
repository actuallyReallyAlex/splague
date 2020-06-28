import * as React from "react";
import { connect } from "react-redux";
import { isOdd } from "../../util";
import { Theme, RootState } from "../../types";

export interface ChatProps {
  chat: string[];
  patientAvatar: string;
  playerAvatar: string;
  theme: Theme;
}

const Chat: React.SFC<ChatProps> = (props: ChatProps) => {
  const { chat, patientAvatar, playerAvatar, theme } = props;

  const [chatStep, setChatStep] = React.useState(0);

  const filteredChat: string[] = chat.filter(
    (chatString: string, i: number) => i <= chatStep
  );

  const dialogElement = document.getElementById(
    "treatment-dialog"
  ) as HTMLDialogElement;

  return (
    <>
      <p className="title" id="treatment-dialog-title">
        Chat
      </p>

      <section className={`nes-container ${theme === "dark" ? "is-dark" : ""}`}>
        <section className="message-list" id="chat-messages">
          {filteredChat.map((chatItem: string, i: number) => (
            <section
              className={`message ${isOdd(i) ? "-right" : "-left"}`}
              key={`chat-${i}`}
            >
              {isOdd(i) ? (
                // * Player
                <>
                  <div
                    className={`nes-balloon from-right ${
                      theme === "dark" ? "is-dark" : ""
                    }`}
                  >
                    <p>{chatItem}</p>
                  </div>
                  <img
                    alt="Player Avatar"
                    className="nes-avatar is-rounded is-large pixelated"
                    src={playerAvatar}
                  />
                </>
              ) : (
                // * Patient
                <>
                  <img
                    alt="Patient Avatar"
                    className="nes-avatar is-rounded is-large pixelated"
                    src={patientAvatar}
                  />
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
          {chatStep < chat.length - 1 && (
            <button
              className="nes-btn is-primary"
              id="chat-advance"
              onClick={() => setChatStep(chatStep + 1)}
            >
              Next
            </button>
          )}
        </section>
      </section>

      <menu className="dialog-menu">
        <button
          className="nes-btn is-primary"
          id="treatment-dialog-primary"
          onClick={() => dialogElement.close()}
        >
          PRIMARY
        </button>
        <button
          className="nes-btn"
          id="treatment-dialog-secondary"
          onClick={() => dialogElement.close()}
        >
          SECONDARY
        </button>
      </menu>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  chat: state.patient.chat,
  patientAvatar: state.patient.avatar,
  playerAvatar: state.player.avatar,
  theme: state.ui.theme,
});

export default connect(mapStateToProps)(Chat);
