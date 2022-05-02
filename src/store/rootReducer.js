import { combineReducers } from "redux";
import appState from "./appState/reducer";
import artist from "./artist/reducer";
import eventsReducer from "./Events/reducer";

export default combineReducers({
  appState,
  artist,
  eventsReducer,
});
