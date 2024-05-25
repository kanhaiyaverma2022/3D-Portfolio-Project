import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { Component } from "react";



const SectionWrapper = (Component , idName) => 
  function HOC(){
    return(
        // here is for animating the component with time duration
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true, amount:0.25}}
        className={`${styles.padding} mx-auto relative z-0 max-w-7xl`}>
          <span className="hash-span" id={idName}>&nbsp;
          </span>
        <Component/>
        </motion.section>
    )
  }


export default SectionWrapper