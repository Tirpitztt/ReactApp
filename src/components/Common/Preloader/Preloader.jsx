import preloader from '../../../Assets/img/preloadgif.gif';
import c from './preload.module.css';

const Preloader = (props)=>{
    return(
        <>
            <div className={c.preloader_wrap}><img src={preloader} alt=""/></div>
        </>
    )
}

export default Preloader;