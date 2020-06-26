import * as React from "react";
import { connect } from "react-redux";
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import { Population, RootState, Theme } from "../types";

export interface StatsProps {
  avatar: string;
  date: string;
  doctorReputation: number;
  earnings: number;
  money: number;
  morality: number;
  name: string;
  population: Population;
  startTime: string;
  storyText: string;
  theme: Theme;
}

const Stats: React.SFC<StatsProps> = (props: StatsProps) => {
  const {
    avatar,
    date,
    doctorReputation,
    earnings,
    money,
    morality,
    name,
    population,
    startTime,
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
        {startTime && (
          <span id="time-played">
            Time Played -{" "}
            {formatDistance(new Date(startTime), new Date(), {
              includeSeconds: true,
            })}
          </span>
        )}
        <span>
          Money - $<span id="money">{money.toLocaleString()}</span>
        </span>
        <span id="earnings">
          Earnings - ${earnings.toLocaleString()}/second
        </span>
        <span id="alive-population">
          Alive Population - {population.alive.toLocaleString()}
        </span>
        <span id="dead-population">
          Dead Population - {population.dead.toLocaleString()}
        </span>
        <span id="infected-population">
          Infected Population - {population.infected.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  avatar: state.player.avatar,
  date: state.game.date,
  doctorReputation: state.player.doctorReputation,
  earnings: state.game.earnings,
  money: state.game.money,
  morality: state.player.morality,
  name: state.player.name,
  population: state.world.population,
  startTime: state.game.startTime,
  storyText: state.story.text,
  theme: state.ui.theme,
});

export default connect(mapStateToProps)(Stats);
