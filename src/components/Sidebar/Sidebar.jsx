
import { motion } from "framer-motion";
import Links from "./Links/Links"
import "./sidebar.scss"
import ToggleButton from "./ToggleButton/ToggleButton";
import { useState } from "react";

const Sidebar = () => {
  const [open,setOpen]=useState(false)
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        duration: 0.5,
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open?"open":"closed"}>
      <motion.div className="bg" variants={variants} >
        <Links ></Links>
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} className="toggleButton"></ToggleButton>
     
    </motion.div>
  );
}

export default Sidebar
