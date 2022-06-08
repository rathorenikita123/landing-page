import style from './Gallery.module.css';
import Image from 'next/image';
import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import images from "../../../public/galleryimage.jpg";

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider() {
  return (
    <div>
        <h2 className={style.heading}>Gallery</h2>
        <div className={style.gallery}>
            <p className={style.para}>(slide to see )</p>
            <OwlCarousel>
                <div className={style.slider}>
                    <Image src={images} alt="img" width={400} height={400} />
                </div>
                <div className={style.slider}>
                    <Image src={images} alt="img" width={400} height={400} />
                </div>
                <div className={style.slider}>
                    <Image src={images} alt="img" width={400} height={400} /> 
                </div>
                <div className={style.slider}>
                    <Image src={images} alt="img" width={400} height={400} />       
                </div>
                <div className={style.slider}>
                    <Image src={images} alt="img" width={400} height={400} />         
                </div>
                <div className={style.slider}>
                    <Image src={images} alt="img" width={400} height={400} />         
                </div>    
            </OwlCarousel>
        </div>
    </div>
  );
}