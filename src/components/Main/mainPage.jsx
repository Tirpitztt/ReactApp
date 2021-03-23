import c from './main.module.css';
import HouseCard from "./houseCard";


const MainPage = (props)=>{

    return(
        <>
        <div className={c.wrap}>
            <div className={c.title_wrap}>
                <p className={c.uptext}>The best of the best</p>
                <h3 className={c.title}>WELCOME TO BEST SOCIAL NETWORK</h3>
                <p className={c.subtitle}>GoT world</p>
                <hr color='#B8860B' align='left' />
                <div className={c.ann_wrap}>
                    <p className={c.anotation}>best network in westeros, 1000000 users, billions fotos
                        dragons,wars,blood and death. <br/>
                        It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    </p>
                </div>

                <div className={c.button}><p>enter</p></div>
            </div>
            <div className={c.house_wrap}>
                <HouseCard />
                <HouseCard />
                <HouseCard />
            </div>

        </div>
            <div className={c.block2}></div>
        </>
    )
}

export default MainPage;