import * as React from "react";
import { connect } from "react-redux";
import { startGame } from "../redux/thunks";
import { setChapter, setStoryText } from "../redux/actions/story";
import { RootState } from "../types";
import { setPlayerName, setPlayerAvatar } from "../redux/actions/player";

export interface OnboardingProps {
  chapter: number;
  handleAskName: () => void;
  handleAvatarChange: (e) => void;
  handleGoOn: () => void;
  handlePlayerNameChange: (e) => void;
  handleSetAvatar: () => void;
  handleStartDay: () => void;
  handleStartJourny: () => void;
  playerAvatar: string;
  playerName: string;
  storyText: string;
}

const Onboarding: React.SFC<OnboardingProps> = (props: OnboardingProps) => {
  const {
    chapter,
    handleAskName,
    handleAvatarChange,
    handleGoOn,
    handlePlayerNameChange,
    handleSetAvatar,
    handleStartDay,
    handleStartJourny,
    playerAvatar,
    playerName,
    storyText,
  } = props;

  const buttons = [
    <button
      className="nes-btn is-primary"
      id={`story-${chapter}`}
      key="button-0"
      onClick={() => handleStartJourny()}
    >
      Start Journy
    </button>,
    <button
      className="nes-btn is-primary"
      id={`story-${chapter}`}
      key="button-1"
      onClick={() => handleGoOn()}
    >
      Go on ...
    </button>,
    <button
      className={`nes-btn is-primary ${!playerName ? "is-disabled" : ""}`}
      disabled={!playerName}
      id={`story-${chapter}`}
      key="button-2"
      onClick={() => handleAskName()}
    >
      That&apos;s me!
    </button>,
    <button
      className={`nes-btn is-primary ${!playerAvatar ? "is-disabled" : ""}`}
      disabled={!playerAvatar}
      id={`story-${chapter}`}
      key="button-3"
      onClick={() => handleSetAvatar()}
    >
      Good lookin&apos;
    </button>,
    <button
      className="nes-btn is-primary"
      id={`story-${chapter}`}
      key="button-4"
      onClick={() => handleStartDay()}
    >
      Start day
    </button>,
  ];

  const content = [
    null,
    null,
    <div className="nes-field" key="player-name">
      <label htmlFor="player-name">Name</label>
      <input
        className="nes-input"
        id="player-name"
        onChange={(e) => handlePlayerNameChange(e)}
        type="text"
      />
    </div>,
    <div className="nes-table-responsive" key="player-avatar">
      <table className="nes-table is-bordered is-centered">
        <tbody>
          <tr>
            <td
              className="avatar_select_cell"
              onClick={() => handleAvatarChange("/assets/playerAvatar.png")}
              id="avatar-1"
            >
              <img alt="Avatar 1" src="/assets/playerAvatar.png" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>,
    null,
  ];

  return (
    <div>
      <p id="story">{storyText}</p>
      {content[chapter]}
      {buttons[chapter]}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  chapter: state.story.chapter,
  playerAvatar: state.player.avatar,
  playerName: state.player.name,
  storyText: state.story.text,
});

const mapDispatchToProps = (dispatch) => ({
  handleAskName: () => {
    dispatch(setChapter(3));
    dispatch(setStoryText("What do you look like?"));
  },
  handleAvatarChange: (avatar) => {
    dispatch(setPlayerAvatar(avatar));
  },
  handleGoOn: () => {
    dispatch(setChapter(2));
    dispatch(setStoryText("What is your name?"));
  },
  handlePlayerNameChange: (e) => {
    dispatch(setPlayerName(e.target.value));
  },
  handleSetAvatar: () => {
    dispatch(setChapter(4));
    dispatch(setStoryText("... the Black Plague starts in 1346. Good luck."));
  },
  handleStartDay: () => dispatch(startGame()),
  handleStartJourny: () => {
    dispatch(setChapter(1));
    dispatch(
      setStoryText(
        "You are a level headed doctor of medicine living in Western Europe. Above all else, you desire to help others. The year is 1345."
      )
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
