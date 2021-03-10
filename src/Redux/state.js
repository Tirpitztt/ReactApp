

let state = {
    profilePage:{
        user:{
            id:"1",
            name:"Sergey",
            adress:'Bobruisk',
            friends:["2","3","4"],
            avaurl:"https://i.pinimg.com/originals/1b/f5/e9/1bf5e9ea0b63636fa40978d519b06716.jpg"
        },
        users:[{
            id:"1",
            name:"Sergey",
            adress:'Bobruisk',
            friends:["2","3","4"],
            avaurl:"https://i.pinimg.com/originals/1b/f5/e9/1bf5e9ea0b63636fa40978d519b06716.jpg"
        },{
            id:"2",
            name:"Volga",
            adress:'Bobruisk',
            friends:["1","3","4"],
            avaurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mP2JO-_zw2s0s-lL8hODv1KTd2vNPdSeKQ&usqp=CAU"
        },{
            id:"3",
            name:"Alina",
            adress:'Posnan',
            friends:["2","1","4"],
            avaurl:"http://www.youloveit.com/uploads/posts/2020-06/medium/1592141723_youloveit_com_frozen_2_elsa_pictures_big_hd01.jpg"
        },{
            id:"4",
            name:"Volodya",
            adress:'Bobruisk',
            friends:["2","3","1"],
            avaurl:"https://i.redd.it/v0caqchbtn741.jpg"
        },{
            id:"5",
            name:"Mudak",
            adress:'Bobruisk',
            friends:[],
            avaurl:"https://ae01.alicdn.com/kf/HTB1a0USalv0gK0jSZKbq6zK2FXaT/Cartoon-Devil-Anal-Beads-Butt-Plug-Adults-Sex-Toy-Silicone-Prostate-Massager.jpg_960x960.jpg"
        }],
        posts:[{
            id:"1",
            user:2,
            post:"Hi i am writer posts",
            likes:'5'
        },{
            id:"2",
            user:4,
            post:"Fuck you",
            likes:'10'
        },{
            id:"3",
            user:3,
            post:"Its beautiful",
            likes:'12'
        },{
            id:"4",
            user:2,
            post:"Author, you god!",
            likes:'55'
        },{
            id:"5",
            user:5,
            post:"I am dolboeb!",
            likes:'100'
        }]
    },
    dialogsPage:{
        users:[{
            id:"1",
            name:"Sergey",
            adress:'Bobruisk',
            friends:["2","3","4"],
            avaurl:"https://i.pinimg.com/originals/1b/f5/e9/1bf5e9ea0b63636fa40978d519b06716.jpg"
        },{
            id:"2",
            name:"Volga",
            adress:'Bobruisk',
            friends:["1","3","4"],
            avaurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mP2JO-_zw2s0s-lL8hODv1KTd2vNPdSeKQ&usqp=CAU"
        },{
            id:"3",
            name:"Alina",
            adress:'Posnan',
            friends:["2","1","4"],
            avaurl:"http://www.youloveit.com/uploads/posts/2020-06/medium/1592141723_youloveit_com_frozen_2_elsa_pictures_big_hd01.jpg"
        },{
            id:"4",
            name:"Volodya",
            adress:'Bobruisk',
            friends:["2","3","1"],
            avaurl:"https://i.redd.it/v0caqchbtn741.jpg"
        },{
            id:"5",
            name:"Mudak",
            adress:'Bobruisk',
            friends:[],
            avaurl:"https://ae01.alicdn.com/kf/HTB1a0USalv0gK0jSZKbq6zK2FXaT/Cartoon-Devil-Anal-Beads-Butt-Plug-Adults-Sex-Toy-Silicone-Prostate-Massager.jpg_960x960.jpg"
        }],
        dialogs:[{
            id:'1',
            userId:'1'
        }, {
            id:'2',
            userId:'2'
        },{
            id:'3',
            userId:'3'
        },{
            id:'4',
            userId:'4'
        },{
            id:'5',
            userId:'5'
        }],
        messages:[{
            id:'1',
            userId:'1',
            dialogId:'1',
            text:'hi, how are you?'
        },{
            id:'2',
            userId:'2',
            dialogId:'1',
            text:'im fine? thank you'
        },{
            id:'3',
            userId:'4',
            dialogId:'2',
            text:'im vova'
        },{
            id:'4',
            userId:'3',
            dialogId:'3',
            text:'hi im alina'
        },{
            id:'5',
            userId:'5',
            dialogId:'4',
            text:'hi, im mudak?'
        }]
    },
    newsPage:{
        users:[{
            id:"1",
            name:"Sergey",
            adress:'Bobruisk',
            friends:["2","3","4"]
        },{
            id:"2",
            name:"Volga",
            adress:'Bobruisk',
            friends:["1","3","4"]
        },{
            id:"3",
            name:"Alina",
            adress:'Posnan',
            friends:["2","1","4"]
        },{
            id:"4",
            name:"Volodya",
            adress:'Bobruisk',
            friends:["2","3","1"]
        },{
            id:"5",
            name:"Mudak",
            adress:'Bobruisk',
            friends:[]
        }],
        news:[{
            "userId": 1,
            "id": 1,
            "pic":"https://user92966.clients-cdnnow.ru/upload/medialibrary/aba/abac42a1a4bad511e0f447e24c1561d9.png?1379669931340925",
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
            {
                "userId": 1,
                "id": 2,
                "pic":"https://user92966.clients-cdnnow.ru/upload/medialibrary/1e6/1e679a478d6b00a0a79f3b7bdbe00b83.png?1379669967477513",
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 2,
                "id": 3,
                "pic":"https://zilcc.ru/upload/iblock/2d1/IMG_20200413_182328_4893afgtrttuu.png",
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
                "userId": 4,
                "id": 4,
                "pic":"https://kadikama.ru/uploads/posts/2016-05/1464519042_poster-161252.jpg",
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
                "userId": 3,
                "id": 5,
                "pic":"http://sun9-65.userapi.com/impf/c856032/v856032227/1b93bf/LS1_3Zm4ELc.jpg?size=600x434&quality=96&proxy=1&sign=1697316dd8a5fdff496945a9cf311c53&type=album",
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
            }]
    },
    navBar:{
        users:[{
            id:"1",
            name:"Sergey",
            adress:'Bobruisk',
            friends:["2","3","4"],
            avaurl:"https://i.pinimg.com/originals/1b/f5/e9/1bf5e9ea0b63636fa40978d519b06716.jpg"
        },{
            id:"2",
            name:"Volga",
            adress:'Bobruisk',
            friends:["1","3","4"],
            avaurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mP2JO-_zw2s0s-lL8hODv1KTd2vNPdSeKQ&usqp=CAU"
        },{
            id:"3",
            name:"Alina",
            adress:'Posnan',
            friends:["2","1","4"],
            avaurl:"http://www.youloveit.com/uploads/posts/2020-06/medium/1592141723_youloveit_com_frozen_2_elsa_pictures_big_hd01.jpg"
        },{
            id:"4",
            name:"Volodya",
            adress:'Bobruisk',
            friends:["2","3","1"],
            avaurl:"https://i.redd.it/v0caqchbtn741.jpg"
        },{
            id:"5",
            name:"Mudak",
            adress:'Bobruisk',
            friends:[],
            avaurl:"https://ae01.alicdn.com/kf/HTB1a0USalv0gK0jSZKbq6zK2FXaT/Cartoon-Devil-Anal-Beads-Butt-Plug-Adults-Sex-Toy-Silicone-Prostate-Massager.jpg_960x960.jpg"
        }],
        user:{
            id:"1",
            name:"Sergey",
            adress:'Bobruisk',
            friends:["2","3","4"]
        }
    }
}

export default state;