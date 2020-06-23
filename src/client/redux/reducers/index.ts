import { combineReducers } from "redux";
import game from "./game";
import player from "./player";
import ui from "./ui";

export default combineReducers({ game, player, ui });
