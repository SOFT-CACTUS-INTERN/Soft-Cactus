import React from "react";
import style from '/src/Styles/bar.module.css'
import instagram from '/src/assets/icons/scroll/SInstagram.svg'
import linkedin from '/src/assets/icons/scroll/SLinkedin.svg'
import metal from '/src/assets/icons/scroll/SMetal.svg'
import microsoft from '/src/assets/icons/scroll/SMicrosoft.svg'
import Pay from '/src/assets/icons/scroll/SPay.svg'
import { motion } from "framer-motion";
import { useMeasure } from "@react-hookz/web";
const Bar = () => {
  let [ref, { width }] = useMeasure();
    let finalPosition ={width}/2 -8;
    return(
        <div className={style.rectangle}>
            <div className={style.scroller}>
                <motion.div 
                  initial={{ x: "0" }}
                animate={{ x:  "20vw"}}
                   transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity
          }}
                ref={ref}
                className={style.imgContainer}>
                    <img src={instagram} alt="Instagram" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={Pay} alt="Pay" />
                    <img src={microsoft} alt="microsoft" />
                    <img src={metal} alt="metal" />


                    <img src={instagram} alt="Instagram" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={Pay} alt="Pay" />
                    <img src={microsoft} alt="microsoft" />
                    <img src={metal} alt="metal" />
                </motion.div>
            </div>
                            

    </div>
    )
}
export default Bar
