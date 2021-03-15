const ADD_POST = 'ADD_POST';
const CHECK_TEXT = 'CHECK_TEXT';

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
    checkedText: 'tirpitz'
};

const profileReducer = (state = initialState,action)=>{

    switch (action.type){
        case ADD_POST :

            return {
                ...state,
                posts:[...state.posts,{id:'6',user:1,post:state.checkedText,likes:'0'}],
                checkedText: ''
            }

        case CHECK_TEXT:
            let newText = (action.text.length>10)?'NINJA-JS':action.text;
            return{
                ...state,
                checkedText: newText
            }

        default : return state;
    }

}
export const addPostActionCreator = ()=> ({type:ADD_POST});
export const checkTextActionCreator = (text)=> ({type:CHECK_TEXT,text:text});
export default profileReducer;