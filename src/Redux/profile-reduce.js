const ADD_POST = 'ADD_POST';
const profileReducer = (state,action)=>{

    switch (action.type){
        case ADD_POST :
        let postObj = {
            id:"6",
            user:1,
            post: state.checkedText,
            likes:'0'
        }
            state.posts.push(postObj);
            state.checkedText = '';
            return state;
        default : return state;
    }

}
export const addPostActionCreator = ()=> ({type:ADD_POST});
export default profileReducer;