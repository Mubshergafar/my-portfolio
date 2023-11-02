import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

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
          <motion.h2 variants={textVariants}>MUBSHER MOHAMED ALI</motion.h2>
          <motion.h1 variants={textVariants}>
            {/* Full Stack Web Developer */}
            Passionate Software Engineer Building Digital Dreams
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio">See the Latest Works</a>
            </motion.button>
            <motion.button
              variants={textVariants}
              style={{
                backgroundColor: "orange",
                color: "#FFFFDD",
                border: "none",
                fontWeight: "500",
              }}
            >
              <a href="#Contact"> Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll image"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {/* Software Engineer Data Scientist */}
        In Love with Code and Committed to Excellence
      </motion.div>
      <div className="imageContainer">
        {/* <img src="/hero.png " alt="my photo" /> */}
        <img src="/aa1.png " alt="my photo" />
      </div>
    </div>
  );
};

export default Hero;
