const SET_USER_DATA = 'SET_USER_DATA';


let localState = {
    userId:null,
    userMail:null,
    userName:null,
    isUserAuth:false
}

const AuthReducer = (state = localState,action)=>{
    switch (action.type){
        case SET_USER_DATA:{
            return {
                ...state,
                userId: action.data.id,
                userMail: action.data.email,
                userName: action.data.login,
                isUserAuth: true
            }
        }
        default:{
            return state;
        }
    }

}

export const setUserData = (data)=>({type:SET_USER_DATA,data});

export default AuthReducer;
