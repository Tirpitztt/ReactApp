import c from './News.module.css';
import BlockNews from "./BlockNews/BlockNews";

const News = (props)=>{
    return(
        <div className={c.wrap}>
            <BlockNews title='Красивая телка сфоталась красиво'
                       src='https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg'
                        text='Дарья Авраменко приехала в Париж и давай фотаться где надо и не надо'/>
            <BlockNews title='Авраам Линкольн рассказал как оно там' src='https://pbs.twimg.com/profile_images/723564356693192705/IV1fgh7G_400x400.jpg'
                       text='Вчера слесарю Курштыке В.Т. приснился по пьяни Авраам Линкольн и рассказал, как он там в аду'/>
        </div>
    )
}
export default News;