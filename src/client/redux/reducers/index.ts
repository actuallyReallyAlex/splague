import { combineReducers } from "redux";
import alert from "./alert";
import game from "./game";
import map from "./map";
import patient from "./patient";
import player from "./player";
import story from "./story";
import ui from "./ui";
import world from "./world";

export default combineReducers({
  alert,
  game,
  map,
  patient,
  player,
  story,
  ui,
  world,
});
