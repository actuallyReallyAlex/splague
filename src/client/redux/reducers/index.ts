import { combineReducers } from "redux";
import game from "./game";
import map from "./map";
import patient from "./patient";
import player from "./player";
import story from "./story";
import ui from "./ui";
import world from "./world";

export default combineReducers({
  game,
  map,
  patient,
  player,
  story,
  ui,
  world,
});
