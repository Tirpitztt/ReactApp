const CHECK_TEXT = 'CHECK_TEXT';
const CHECK_POST = 'CHECK_POST'
const CHECK_MESSAGE = 'CHECK_MESSAGE';

const checkTextReducer = (state,action)=>{
   switch (action.type){
       case CHECK_TEXT:
           if(action.entity===CHECK_POST){
               let newText = (action.text.length>10)?'NINJA-JS':action.text;
               state.profilePage.checkedText = newText;
           }else if(action.entity===CHECK_MESSAGE){
               let newText = (action.text.length>20)?'SAMURAI-JS':action.text;
               state.dialogsPage.checkedText = newText;
           }
           return state;
       default : return state;
   }


}
export const checkTextActionCreator = (text,entity)=> ({type:CHECK_TEXT,text:text,entity:entity});

export default checkTextReducer;