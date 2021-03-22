import c from './main.module.css';

const HouseCard = (props)=>{
    return (
        <div className={c.card_wrap}>
            <div className={c.enterwrap}>
                <div className={c.picwrap}><img src="../../Assets/img/bolton.jpg" alt=""/></div>
                <div className={c.textwrapcard}>
                    <p className={c.titlecard}>Title</p>
                    <p className={c.textcard}>some text</p>
                </div>
            </div>

        </div>
    )
}

export default HouseCard;
