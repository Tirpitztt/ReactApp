import c from './../Users.module.css';

const User = (props)=>{

    return(
        <div className={c.wrap_elem}>
            <div className={c.wrap_ava}><img src={props.avaurl} alt=""/></div>
            <div className={c.wrap_info}>
                <div><p>Имя: {props.name}</p></div>
                <div><p>Статус: {props.status}</p></div>
                <div><p>Страна: {props.location.country}</p></div>
                <div><p>Город: {props.location.city}</p></div>
            </div>
            <div className={c.wrap_button}></div>
        </div>
    )
}

export default User;