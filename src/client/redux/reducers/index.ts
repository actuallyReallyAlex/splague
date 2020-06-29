import { combineReducers } from "redux";
import alert from "./alert";
import game from "./game";
import inventory from "./inventory";
import map from "./map";
import menu from "./menu";
import patient from "./patient";
import player from "./player";
import story from "./story";
import ui from "./ui";
import world from "./world";

export default combineReducers({
  alert,
  game,
  inventory,
  map,
  menu,
  patient,
  player,
  story,
  ui,
  world,
});
