import preloader from '../../../Assets/img/preloadbut.gif';
import c from '../../../App.css';

const PreloadButton = (props)=>{
    return(
        <>
            <div className={c.prldbox}><img src={preloader} alt=""/></div>
        </>
    )
}

export default PreloadButton;