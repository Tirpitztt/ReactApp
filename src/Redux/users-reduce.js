const ADD_USER = 'ADD_USER';
const FOLLOW = 'FOLLOW';


let stateLoc = [{
        id: 1,
        name: "Sergey",
        adress: 'Bobruisk',
        location:{country:'Belaus',city:'Bobruisk'},
        friends: ["2", "3", "4"],
        status:'hue moe',
        avaurl: "https://i.pinimg.com/originals/1b/f5/e9/1bf5e9ea0b63636fa40978d519b06716.jpg"
    }, {
        id: 2,
        name: "Volga",
        adress: 'Bobruisk',
        location:{country:'Belaus',city:'Bobruisk'},
        friends: ["1", "3", "4"],
        status:'status volga',
        avaurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mP2JO-_zw2s0s-lL8hODv1KTd2vNPdSeKQ&usqp=CAU"
    }, {
        id: 3,
        name: "Alina",
        adress: 'Posnan',
        location:{country:'Poland',city:'Posnan'},
        friends: ["2", "1", "4"],
        status:'alina in chat',
        avaurl: "http://www.youloveit.com/uploads/posts/2020-06/medium/1592141723_youloveit_com_frozen_2_elsa_pictures_big_hd01.jpg"
    }, {
        id: 4,
        name: "Volodya",
        adress: 'Bobruisk',
        location:{country:'Belaus',city:'Bobruisk'},
        friends: ["2", "3", "1"],
        status:'volodya was here',
        avaurl: "https://i.redd.it/v0caqchbtn741.jpg"
    }, {
        id: 5,
        name: "Mudak",
        adress: 'Bobruisk',
        location:{country:'Belaus',city:'Bobruisk'},
        friends: [],
        status:'im mudak',
        avaurl: "https://ae01.alicdn.com/kf/HTB1a0USalv0gK0jSZKbq6zK2FXaT/Cartoon-Devil-Anal-Beads-Butt-Plug-Adults-Sex-Toy-Silicone-Prostate-Massager.jpg_960x960.jpg"
    }];

const UsersReducer = (state = stateLoc,action)=>{

    switch (action.type){
        case ADD_USER:
            return [
                ...state,
                {id:state.length+1,name:'Kokoko',adress:'Almaty',location:{country:'Kazahstah',city:'Almaty'},friends:[],status:'new user hello',avaurl:'http://sun9-27.userapi.com/ay2BrhWYcj5qU3A6GXz6YZxM2Dg2S4RIuJZqig/THsCnD5MnA8.jpg'}
            ]
        case FOLLOW:
            let stateCopy = state.map(u => u);
            stateCopy.forEach(item =>{
                if(item.id===action.userID){
                   let user = {...item,friends:[...item.friends]};
                   

                }
            })
        default:return state;
    }


}

export const addUserAC = ()=>({type:ADD_USER});
export const followAC = (id)=>({type:FOLLOW,userID:id});

export default UsersReducer;
