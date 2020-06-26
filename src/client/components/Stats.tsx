import * as React from "react";
import { connect } from "react-redux";
import format from "date-fns/format";
import { RootState, Theme } from "../types";

export interface StatsProps {
  avatar: string;
  date: string;
  doctorReputation: number;
  morality: number;
  name: string;
  storyText: string;
  theme: Theme;
}

const Stats: React.SFC<StatsProps> = (props: StatsProps) => {
  const {
    avatar,
    date,
    doctorReputation,
    morality,
    name,
    storyText,
    theme,
  } = props;
  return (
    <div
      className={`nes-container with-title is-centered ${
        theme === "dark" ? "is-dark" : ""
      }`}
    >
      <p className="title">splague</p>
      <div className="flex-col">
        <img
          alt="Player Avatar"
          className="nes-avatar is-rounded pixelated"
          id="avatar"
          src={avatar}
        />
        <span id="name">{name}</span>
        <span id="date">{format(new Date(date), "MMMM, yyy G")}</span>
        <p id="story">{storyText}</p>
        <span id="doctor-reputation">
          Doctor Reputation - {doctorReputation}
        </span>
        <span id="morality">Morality - {morality}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  avatar: state.player.avatar,
  date: state.game.date,
  doctorReputation: state.player.doctorReputation,
  morality: state.player.morality,
  name: state.player.name,
  storyText: state.story.text,
  theme: state.ui.theme,
});

export default connect(mapStateToProps)(Stats);
