import * as React from "react";
import { connect } from "react-redux";
import { travel } from "../redux/actions";
import { locations } from "../constants";
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
        {locations.map((location: Location, i: number) => (
          <button
            className={`nes-btn ${
              currentLocation === location ? "is-disabled" : ""
            }`}
            disabled={currentLocation === location}
            id={`location-${location.replace(/ /gm, "-")}`}
            key={i}
            onClick={() => handleTravel(location)}
          >
            {location.toUpperCase()}
          </button>
        ))}
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
