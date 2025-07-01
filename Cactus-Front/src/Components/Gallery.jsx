import React from "react";
import style from '/src/Styles/gallery.module.css'
import ball from '/src/assets/decor/ball.svg'
import  FollowUs from '/src/Components/FollowUs.jsx'
import image1 from '/src/assets/gallery/image1.svg'
import image2 from '/src/assets/gallery/image2.svg'
import image3 from '/src/assets/gallery/image3.svg'
import image4 from '/src/assets/gallery/image4.svg'
import right from '/src/assets/icons/scroll/toRight.svg'
import left from '/src/assets/icons/scroll/toLeft.svg'
import ellipse from '/src/assets/decor/ellipse.svg'
import Draggable from "react-draggable";
import { useState ,useRef } from "react";


 
const Gallery= ({text})=>{
const images =[image1,image2,image3,image1,image2,image3,image1,image2,image3];
    const imageContainer = useRef(null);


  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
  
    setIsDragging(true);
    setStartX(e.pageX - imageContainer.current.offsetLeft);
    setScrollLeft(imageContainer.current.scrollLeft);
  
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - imageContainer.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust multiplier for speed
    imageContainer.current.scrollLeft = scrollLeft - walk;
  };
    
    
    const scroll=(direction)=>{
        const currentScroll = imageContainer.current.scrollLeft;
        if(direction === 'left')
            imageContainer.current.scrollTo({
                left: currentScroll - 400 ,
                behavior:'smooth',
            });
            else{
               imageContainer.current.scrollTo({
                left: currentScroll + 400 ,
                behavior:'smooth',
            }); 
            }
    }
    return(
        <div className={style.contactGallery}>
        <div className={style.TextContainer}>
            <img src={ball} alt="O" />
            <div className={style.Text}>
                <p className={style.titre}>Our Agency Vibe<span>.</span></p>
                <p className={style.soustitre}>Teamwork begins by building trust.
                    And the only way to do that is to 
                    overcome our need for invulnerability</p>
            </div>
        </div>
        <div className={style.gallery}>
            <div className={style.scrollbuttons}>
                <img src={left} alt="<-" className={style.scrollbutton} onClick={()=>scroll('left')} />
                <img src={right} alt="->" className={style.scrollbutton} onClick={()=>scroll('right')}/>
            </div>
            <img src={ellipse} alt="" className={style.ellipseUp} />
            <div className={style.imageContainer} ref={imageContainer}
        style={{
            display: 'flex',
            overflowX: 'auto',
            userSelect: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}            
            >
                {images.map((img,idx)=>(
                    <div className={style.galleryItem}><img src={img} key={idx} className={style.galleryimg} loading="lazy"  draggable="false"/></ div>
                ))}
            </div>
            <img src={ellipse} alt="" className={style.ellipseDown} />

        </div>
        <FollowUs alink={'https://www.instagram.com/soft.cactus.communication/'} />
        </div>
    );
};
export default Gallery;
