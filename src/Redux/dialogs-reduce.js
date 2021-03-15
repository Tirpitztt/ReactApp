const ADD_MESSAGE = 'ADD_MESSAGE';


const dialogReducer = (state,action)=>{
    switch (action.type){
        case  ADD_MESSAGE:
            let newMess = {
                id:'7',
                userId:'2',
                dialogId:'1',
                text: state.checkedText

            }
            state.messages.push(newMess);
            return state;
        default : return state;
    }

}
export const addMessageCreator = ()=> ({type:ADD_MESSAGE});

export default dialogReducer;