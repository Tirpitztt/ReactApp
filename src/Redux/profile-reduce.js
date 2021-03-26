import {statusAPI, usersAPI} from "../Api/api";

const ADD_POST = 'ADD_POST';

const SET_UESR_PROFILE = 'SET_UESR_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [{
        id: "1",
        user: 2,
        post: "Hi i am writer posts",
        likes: '5'
    }, {
        id: "2",
        user: 4,
        post: "Fuck you",
        likes: '10'
    }, {
        id: "3",
        user: 3,
        post: "Its beautiful",
        likes: '12'
    }, {
        id: "4",
        user: 2,
        post: "Author, you god!",
        likes: '55'
    }, {
        id: "5",
        user: 5,
        post: "I am dolboeb!",
        likes: '100'
    }],

    profile: null,
    status:''
};

const profileReducer = (state = initialState,action)=>{

    switch (action.type){
        case ADD_POST :

            return {
                ...state,
                posts:[...state.posts,{id:'6',user:1,post:action.text,likes:'0'}],

            }


        case SET_UESR_PROFILE:{
            return {
                ...state,
                profile:action.profile
            }
        }
        case SET_USER_STATUS:{
            return {
                ...state,
                status:action.status.status
            }
        }
        default : return state;
    }

}
export const addP = (text)=> ({type:ADD_POST,text});

export const setUserProfile = (profile)=>({type:SET_UESR_PROFILE,profile});
const setUserStatus = (status) => ({type:SET_USER_STATUS,status});

export const getProfileThunk = (userId)=>{
    return (dispatch)=>{
        dispatch(setUserProfile(null));
        usersAPI.getUserProfile(userId).then(data=>{
            //this.props.setFetching(false);
            dispatch(setUserProfile(data));
        })
    }
}

export const getStatusThunk = (userId)=>{
    return (dispatch)=>{
        statusAPI.getUserStatus(userId).then(data=>{
            dispatch(setUserStatus(data));
        })
    }
}

export const updateStatusThunk = (status)=>{
    return (dispatch)=>{
        statusAPI.updateStatus(status).then(data=>{
            if(data.resultCode===0){
                dispatch(setUserStatus(status))
            }
        })
    }
}

export default profileReducer;