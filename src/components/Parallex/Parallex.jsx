import React, { useRef } from 'react'
import "./parallex.scss"
import {motion,useScroll, useTransform} from "framer-motion"

const Parallex = ({type}) => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start", "end start"]
    })
    console.log(scrollYProgress)
    const yText=useTransform(scrollYProgress,[0,1],["0%","500%"])
    const yBg=useTransform(scrollYProgress,[0,1],["0%","50%"])
    
  return (
    <div
      className="parallex"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type == "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg,backgroundImage:`url(${type==="services"?"./planets.png":"./sun.png"})` }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}

export default Parallex
