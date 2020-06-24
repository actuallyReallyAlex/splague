import { combineReducers } from "redux";
import game from "./game";
import player from "./player";
import story from "./story";
import ui from "./ui";
import world from "./world";

export default combineReducers({ game, player, story, ui, world });
