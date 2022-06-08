import style from './Work.module.css';
import Image from 'next/image';
import Img from '../../../public/work.jpg';

export default function Work () {
    const content = [
        {
            id: 1,
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet",
        },
        {
            id: 2,
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet",
        },
        {
            id: 3,
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet",
        }
    ]
    return(
            <div className={style.container} id="howitworks">
                <div>
                    <Image src={Img} alt="img"width={500} height={500}/>
                </div>
                <div className={style.dis}>
                    <div >
                        <h2>How It Works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={style.boxes}>
                        {content.map((item) => (
                            <div className={style.box} key={item.id}>
                                <h3 className={style.text}>{item.title}</h3>
                                <p className={style.text}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
}