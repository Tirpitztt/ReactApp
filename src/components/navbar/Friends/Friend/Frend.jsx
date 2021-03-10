import c from './Friend.module.css';

const Friend = (props)=>{

    return(
        <div className={c.wrap}>
            <div className={c.avawrap}><img src={props.ava} alt=""/></div>
            <div className={c.nik}><p>{props.name}</p></div>

        </div>
    )
}

export default Friend;