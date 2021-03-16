import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogReducer from "./dialogs-reduce";
import navBarReducer from "./navBar-reduce";
import UsersReducer from "./users-reduce";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    navBar:navBarReducer,
    users:UsersReducer
});


let store = createStore(reducers);



export default store;