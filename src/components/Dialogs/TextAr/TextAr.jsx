import c from './TextAr.module.css'

const TextAr = (props)=>{


    return(
        <div className={c.wrap}>
            <div><textarea name="" id="" cols="70" rows="5"></textarea></div>
            <div><div className={c.sendwrap}><span className='icon-paperplane'></span></div></div>

        </div>
    )
}
export default TextAr;
