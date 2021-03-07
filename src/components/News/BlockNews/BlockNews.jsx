import c from './BlockNews.module.css';

const BlockNews = (props)=>{
    return (
        <div className={c.block}>
            <div className={c.title_block}>
                <div className={c.picture}><img src={props.src} alt=""/></div>
                <div className={c.info}>
                    <h3>{props.title}</h3>
                    <p>date</p>
                    <p><b>author</b></p>
                </div>
            </div>
            <div className={c.news_block}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default BlockNews;