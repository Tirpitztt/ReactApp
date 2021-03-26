const ADD_MESSAGE = 'ADD_MESSAGE';
const CHECK_TEXT = 'CHECK_TEXT';

let initialState = {
    dialogs: [{
        id: '1',
        userId: '1'
    }, {
        id: '2',
        userId: '2'
    }, {
        id: '3',
        userId: '3'
    }, {
        id: '4',
        userId: '4'
    }, {
        id: '5',
        userId: '5'
    }],
    messages: [{
        id: '1',
        userId: '1',
        dialogId: '1',
        text: 'hi, how are you?'
    }, {
        id: '2',
        userId: '2',
        dialogId: '1',
        text: 'im fine? thank you'
    }, {
        id: '3',
        userId: '4',
        dialogId: '2',
        text: 'im vova'
    }, {
        id: '4',
        userId: '3',
        dialogId: '3',
        text: 'hi im alina'
    }, {
        id: '5',
        userId: '5',
        dialogId: '4',
        text: 'hi, im mudak?'
    }],

};

const dialogReducer = (state = initialState,action)=>{
    switch (action.type){
        case  ADD_MESSAGE:
             return {
                ...state,
                messages:[...state.messages,{id:'6',userId:'1',dialogId:'2',text:action.text}]
            }



        default : return state;
    }

}
export const addMessageCreator = (text)=> ({type:ADD_MESSAGE,text});

export default dialogReducer;