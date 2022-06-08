import style from './Main.module.css';
import Image from 'next/image';
import House from '../../../public/house.jpg';
import House2 from '../../../public/house2.jpg';

export default function Main () {
    return(
        <>
            <div className={style.container} id="home">
                <div className={style.text}>
                    <h2>A Better Way To Build</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={style.background}>
                    <Image src={House} alt="img"width={350} height={300}/>
                    <Image src={House2} alt="img"width={350} height={300}/>
                </div>   
            </div>
        </>
    );
}