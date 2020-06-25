import * as React from "react";
import { connect } from "react-redux";
import { travel } from "../redux/actions";
import { Location, RootState } from "../types";

export interface MapProps {
  chapter: number;
  currentLocation: Location;
  handleTravel: (location: Location) => void;
}

const Map: React.SFC<MapProps> = (props: MapProps) => {
  const { chapter, currentLocation, handleTravel } = props;

  if (chapter > 2) {
    return (
      <div id="map">
        <span id="current-location">Current Location - {currentLocation}</span>
        <button
          disabled={currentLocation === "church"}
          id="location-church"
          onClick={() => handleTravel("church")}
        >
          CHURCH
        </button>
        <button
          disabled={currentLocation === "graveyard"}
          id="location-graveyard"
          onClick={() => handleTravel("graveyard")}
        >
          GRAVEYARD
        </button>
        <button
          disabled={currentLocation === "home"}
          id="location-home"
          onClick={() => handleTravel("home")}
        >
          HOME
        </button>
        <button
          disabled={currentLocation === "office"}
          id="location-office"
          onClick={() => handleTravel("office")}
        >
          OFFICE
        </button>
        <button
          disabled={currentLocation === "tavern"}
          id="location-tavern"
          onClick={() => handleTravel("tavern")}
        >
          TAVERN
        </button>
        <button
          disabled={currentLocation === "town square"}
          id="location-town-square"
          onClick={() => handleTravel("town square")}
        >
          TOWN SQUARE
        </button>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state: RootState) => ({
  chapter: state.story.chapter,
  currentLocation: state.map.currentLocation,
});

const mapDispatchToProps = (dispatch) => ({
  handleTravel: (location: Location) => dispatch(travel(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
