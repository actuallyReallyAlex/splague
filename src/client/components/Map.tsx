import * as React from "react";
import { connect } from "react-redux";
import { travel } from "../redux/thunks";
import { locations } from "../constants";
import { Location, RootState, Theme } from "../types";

export interface MapProps {
  chapter: number;
  currentLocation: Location;
  handleTravel: (location: Location) => void;
  theme: Theme;
}

const Map: React.SFC<MapProps> = (props: MapProps) => {
  const { chapter, currentLocation, handleTravel, theme } = props;

  const firstLocations = locations.slice(0, 3);
  const secondLocations = locations.slice(3, 6);

  if (chapter > 2) {
    return (
      <div className="nes-table-responsive flex-col" id="map">
        <h2>Map</h2>
        <span id="current-location">Current Location - {currentLocation}</span>
        <table
          className={`nes-table is-bordered is-centered ${
            theme === "dark" ? "is-dark" : ""
          }`}
        >
          <tbody>
            <tr>
              {firstLocations.map((location: Location, i: number) => (
                <td
                  key={`${i}-${location.replace(/ /gm, "-")}`}
                  style={{ width: "250px" }}
                >
                  <button
                    className={`nes-btn ${
                      currentLocation === location ? "is-disabled" : ""
                    }`}
                    disabled={currentLocation === location}
                    id={`location-${location.replace(/ /gm, "-")}`}
                    onClick={() => handleTravel(location)}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "100%",
                    }}
                  >
                    {location.toUpperCase()}
                  </button>
                </td>
              ))}
            </tr>
            <tr>
              {secondLocations.map((location: Location, i: number) => (
                <td
                  key={`${i}-${location.replace(/ /gm, "-")}`}
                  style={{ width: "250px" }}
                >
                  <button
                    className={`nes-btn ${
                      currentLocation === location ? "is-disabled" : ""
                    }`}
                    disabled={currentLocation === location}
                    id={`location-${location.replace(/ /gm, "-")}`}
                    onClick={() => handleTravel(location)}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "100%",
                    }}
                  >
                    {location.toUpperCase()}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state: RootState) => ({
  chapter: state.story.chapter,
  currentLocation: state.map.currentLocation,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleTravel: (location: Location) => dispatch(travel(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
