import preloader from '../../../Assets/img/preloadbut.gif';
import c from './preload.module.css';

const PreloadButton = (props)=>{
    return(

            <div className={c.prldbox}><img src={preloader} alt=""/></div>

    )
}

export default PreloadButton;