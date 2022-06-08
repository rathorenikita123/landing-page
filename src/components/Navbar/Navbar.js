import style from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Menu from '../../../public/menu.png';
import Close from '../../../public/close.png';
import Twitter from '../../../public/twitter.png';
import Facebook from '../../../public/facebook.png';
import Instagram from '../../../public/instagram.png';
import { useState } from 'react';


export default function Navbar () {
    const [Offcanvas, setOffcanvas] = useState(false);
    return(
        <>
            <nav className={style.navbar}>
                <Image src={Logo} alt="logo" width={50} height={50}/>
                <a href="">Architecture</a>    
                <Image 
                src={Menu} 
                alt="menu" 
                width={40} 
                height={30}
                style={{ cursor: "pointer"}}
                onClick={() => setOffcanvas(true)}
                />
            </nav>
            <div className={`${style.display_menu} ${Offcanvas ? style.active : ""} `}>
                <div className={style.close}>
                    <Image src={Close} alt="close" width={30} height={30} onClick={() => setOffcanvas(false)}/>
                </div>
                <div className={style.content}>
                    <div className={style.items}>
                        <a href="#home">Home</a>
                        <a href="#overview">Overview</a>
                        <a href="#howitworks">How It Works</a>
                        <a href="#gallery">Gallery</a>
                    </div>
                    <div className={style.contact}>
                        <a href="#contact">Contact</a> 
                        <div className={style.image}>
                            <a href="#twitter">
                                <Image src={Twitter} alt="twitter" width={30} height={30}/>
                            </a>
                            <a href="#facebook">
                                <Image src={Facebook} alt="facebook" width={30} height={30}/>
                            </a>
                            <a href="#insta">
                                <Image src={Instagram} alt="instagram" width={30} height={30}/>
                            </a>
                        </div>
                        
                    </div>    
                </div>
            </div>
        </>
            
    );

}