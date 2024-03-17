import React, { useEffect, useState } from 'react'
import "./test.scss"

import {motion} from "framer-motion"
const Test = () => {
const [a,setA]=useState(true)
const [as,setAs]=useState(0)
  const variants={
    initial:{
      x:-500,
      opacity:0.3

    },
    animate:{
      x:100,
      opacity:1,
      y:100,
      transition:{
        duration:1,
        staggerChildren:0.5,

      }
    }
  }

  const itemVariants={
    initial:{
    y:-100,
    opacity:0,
    }
,
    animate:{
      y:0,
      opacity:1,
      transition:{
        
        
      }
    }
  }
  useEffect(()=>{
    console.log("hi " ,as )
  },[as])
  console.log("as "+as)
  return (
    <>
      <button onClick={()=>setA(!a)}>click</button>
      <button onClick={()=>setAs((prev)=>prev+1)}>click</button>
      <motion.div
        className="test"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="children" variants={itemVariants}></motion.div>
        <motion.div className="children" variants={itemVariants}></motion.div>
        <motion.div className="children" variants={itemVariants}></motion.div>
      </motion.div>
    </>
  );
}

export default Test
