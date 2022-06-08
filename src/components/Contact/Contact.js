import style from './Contact.module.css';
import Image from 'next/image';
import Twitter from '../../../public/twitter.png';
import Facebook from '../../../public/facebook.png';
import Instagram from '../../../public/instagram.png';

export default function Contact () {
    return(
        <div className={style.contact_us} id="contact">
            <h2 className={style.heading}>Contact Us</h2>
            <div className={style.contact}> 
                <div className={style.contact_info}>  
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
                    <div className={style.address_info}>
                        <span>Address</span><br/><br/>
                        <span>Place</span><br/><br/>
                        <span>Country</span><br/><br/>
                        <span>Contact No</span>
                    </div>
                </div>   
                    <div className={style.info}>
                        <h2>Lorem Ipsum</h2>
                        <div className={style.email_box}>
                            <textarea  rows="5" placeholder="Message" /><br/>
                            <input type="email" placeholder="name@gmail.com"/><br/>
                            <button>Send</button>
                        </div>
                    </div>
            </div>    
        </div>
    );
}
