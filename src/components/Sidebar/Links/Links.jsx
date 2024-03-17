import React from "react";
import { motion } from "framer-motion";
const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
      close: {
        transition: {
          staggerChildren: 0.05,
          staggerDirection: -1,
        },
      },
    },
  };
  const itemVariants = {
    open: {
      transition: {
        y: 0,
        opacity: 1,
        duration:1
      },
      close: {
        transition: {
          y: 50,
          opacity: 0,
          duration:1
        },
      },
    },
  };
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div
      className="links"
      variants={variants}
      // animate={isOpen?"open":"closed"}
    >
      {items.map((item) => (
        <motion.a
          href={`{#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
