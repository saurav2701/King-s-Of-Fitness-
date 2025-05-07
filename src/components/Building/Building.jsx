import React from "react";
import heroclasses from "./Building.module.css";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";

const titleVariants = {
  visible: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const titleChildAnimate = {
  hidden: { y: 70, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const Hero = () => {
  const browseDetailsCaller = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.scrollTo(0, document.getElementById("about-us").offsetTop);
  };

  return (
    <aside>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className={heroclasses.title}
      >
        <motion.p variants={titleChildAnimate}>Get Body in</motion.p>
        <motion.p
          variants={titleChildAnimate}
          className={heroclasses["title-italic"]}
        >
          Shape & Stay
        </motion.p>
        <motion.p variants={titleChildAnimate}>Healthy</motion.p>
      </motion.div>
      <div>
        <IconContext.Provider value={{ size: "4em", color: "white" }}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className={heroclasses["fitness-image__wrapper"]}
          >
            {/* Background image applied via CSS */}
          </motion.div>
        </IconContext.Provider>
      </div>
    </aside>
  );
};

export default Hero;

