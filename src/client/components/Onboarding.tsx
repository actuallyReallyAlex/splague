import * as React from "react";
import { connect } from "react-redux";
import { startGame } from "../redux/thunks";
import { setChapter, setStoryText } from "../redux/actions/story";
import { RootState } from "../types";
import { setPlayerName } from "../redux/actions/player";

export interface OnboardingProps {
  chapter: number;
  handleAskName: () => void;
  handleGoOn: () => void;
  handlePlayerNameChange: (e) => void;
  handleStartDay: () => void;
  handleStartJourny: () => void;
  playerName: string;
  storyText: string;
}

const Onboarding: React.SFC<OnboardingProps> = (props: OnboardingProps) => {
  const {
    chapter,
    handleAskName,
    handleGoOn,
    handlePlayerNameChange,
    handleStartDay,
    handleStartJourny,
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
      className="nes-btn is-primary"
      id={`story-${chapter}`}
      key="button-3"
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
  playerName: state.player.name,
  storyText: state.story.text,
});

const mapDispatchToProps = (dispatch) => ({
  handleAskName: () => {
    dispatch(setChapter(3));
    dispatch(setStoryText("... the Black Plague starts in 1346. Good luck."));
  },
  handleGoOn: () => {
    dispatch(setChapter(2));
    dispatch(setStoryText("What is your name?"));
  },
  handlePlayerNameChange: (e) => {
    dispatch(setPlayerName(e.target.value));
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
