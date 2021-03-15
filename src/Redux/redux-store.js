import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogReducer from "./dialogs-reduce";
import navBarReducer from "./navBar-reduce";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    navBar:navBarReducer
});


let store = createStore(reducers);



export default store;