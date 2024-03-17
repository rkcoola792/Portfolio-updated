import "./hero.scss"
import React from 'react'
import {motion} from "framer-motion"


const textVariants={
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChidren:0.1
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}
const sliderVariants={
  initial:{x:100},
  animate:{
    x:"-300%",
    transition:{
      repeatType:"mirror",
      repeat:Infinity,
      duration:30
    }
  }

}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="">
            Rajeev Kumar
          </motion.h2>
          <motion.h1 variants={textVariants} className="">
            Web Developer and Designer
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">
              <motion.button variants={textVariants}>
                See the latest work
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="./scroll.png"
            animate="scrollButton"
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer
      </motion.div>
      <div className="imageContainer">
        <img src="./avatar.png"></img>
      </div>
    </div>
  );
}

export default Hero
