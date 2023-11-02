import { useRef } from "react";
import "./portafolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Facebook clone",
    img: "https://images.pexels.com/photos/3545778/pexels-photo-3545778.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum  libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellatexplicabo maiores?",
  },
  {
    id: 2,
    title: "youTube clone",
    img: "https://images.pexels.com/photos/18548352/pexels-photo-18548352/free-photo-of-woman-waiting-for-laundry-in-an-laundromat.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum  libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellatexplicabo maiores?",
  },
  {
    id: 3,
    title: "linkedIn  clone",
    img: "https://images.pexels.com/photos/14573609/pexels-photo-14573609.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum  libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellatexplicabo maiores?",
  },
  {
    id: 4,
    title: "Instagram clone",
    img: "https://images.pexels.com/photos/18509188/pexels-photo-18509188/free-photo-of-cute-kid.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum  libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellatexplicabo maiores?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="project image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portafolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portafolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portafolio;
