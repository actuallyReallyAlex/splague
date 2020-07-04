import * as React from "react";
import { connect } from "react-redux";
import { startGame } from "../redux/thunks";
import { setChapter, setStoryText } from "../redux/actions/story";
import { RootState } from "../types";

export interface OnboardingProps {
  chapter: number;
  handleGoOn: () => void;
  handleStartDay: () => void;
  handleStartJourny: () => void;
  storyText: string;
}

const Onboarding: React.SFC<OnboardingProps> = (props: OnboardingProps) => {
  const {
    chapter,
    handleGoOn,
    handleStartDay,
    handleStartJourny,
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
      className="nes-btn is-primary"
      id={`story-${chapter}`}
      key="button-2"
      onClick={() => handleStartDay()}
    >
      Start day
    </button>,
  ];
  return (
    <div>
      <p id="story">{storyText}</p>
      {buttons[chapter]}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  chapter: state.story.chapter,
  storyText: state.story.text,
});

const mapDispatchToProps = (dispatch) => ({
  handleGoOn: () => {
    dispatch(setChapter(2));
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
