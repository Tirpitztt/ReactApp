import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduce";
import dialogReducer from "./dialogs-reduce";
import navBarReducer from "./navBar-reduce";
import UsersReducer from "./users-reduce";
import AuthReducer from "./auth-reduce";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogReducer,
    navBar:navBarReducer,
    users:UsersReducer,
    authentication:AuthReducer
});


let store = createStore(reducers,applyMiddleware(thunk));



export default store;