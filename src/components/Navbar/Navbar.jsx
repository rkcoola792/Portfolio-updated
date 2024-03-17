import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../Sidebar/Sidebar';
import HomeIcon from "@mui/icons-material/Home";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          className="left-icon"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Home
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="right-icons social flex"
        >
          <a href="https://www.instagram.com/itsnotrk792/">
            <img src="/instagram.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/rajeev-kumar-3979b3172/">
            <img src="/linkdin.png"></img>
          </a>
          <a href="#Contact">
            <img src="/email.png"></img>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar
