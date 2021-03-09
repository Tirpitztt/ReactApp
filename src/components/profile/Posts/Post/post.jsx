import c from './post.module.css';

const PostElement = (props)=>{
    return(
        <div className={c.postwr}>
            <div className={c.post}>
                <div className={c.ava}><img src={props.avaurl} alt=""/></div>
                <div className={c.coment}>{props.message}</div>
            </div>

            <div className={c.butwrap}>
                <div className={c.like}><span className='icon-like'></span>Like {props.like}</div>
                <div className={c.like}><span className='icon-like'></span>No like </div>
            </div>
        </div>
    )
}

const Post = (props)=>{

    let postData = [
        {message:"message from hell mazafaka",like:"5",avaurl:"https://i.pinimg.com/564x/3c/e6/25/3ce625ab130460755d1475fb033652f2.jpg"},
        {message:"message from cat",like:"10",avaurl:"https://4.bp.blogspot.com/-JZIEQ4RWN-8/Wk0DCcwFlWI/AAAAAAAAJjg/HzR7GQdoEBknWhE-k09LJrCwhhqbrWNPgCLcBGAs/s1600/Screen%2BShot%2B2018-01-03%2Bat%2B18.20.15.png"},
        {message:"message from abrakadabra",like:"20",avaurl:"https://st3.depositphotos.com/11670786/17645/i/600/depositphotos_176452198-stock-photo-evil-crafty-kitty.jpg"}
    ]

    let res = postData.map(post => <PostElement message={post.message} like={post.like}  avaurl={post.avaurl} />);

    return res;
}
export default Post;