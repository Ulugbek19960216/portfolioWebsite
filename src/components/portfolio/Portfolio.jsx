import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Schedular Website",
    img: "./Schedular.png",
    desc: "The Scheduler Website is a robust online platform designed to streamline task management and scheduling activities. It provides users with a user-friendly interface to organize their daily tasks efficiently. Key features include task creation, prioritization, and management, ensuring users can stay productive and organized.",
    link: "https://beck0797.github.io/scheduler_page/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    img: "./Portfolio4.png",
    desc: "The portfolio website is a showcase of my skills and projects, crafted using modern web technologies like React and enhanced with dynamic animations through Framer Motion. It serves as a gateway for visitors to explore my capabilities, experience, and the projects I've worked on.",
    link: "#",
  },
  {
    id: 3,
    title: "NoteKeeper",
    img: "./Notekeeper.png",
    desc: "NoteKeeper is a simple and efficient note-taking application built with React. It allows users to write titles, take notes, and easily add or delete them. The clean and intuitive interface ensures a seamless user experience.",
    link: "https://ulugbek19960216.github.io/Note_Keeper/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button whileHover={{ background: "lightgray", color: "black" }}><a href={item.link} >Check out website</a></motion.button>
          </motion.div>
        </div>
      </div> 
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;