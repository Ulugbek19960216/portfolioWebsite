import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Delivering Excellence in Web Development
          <br /> and Digital Solutions
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="Team Collaboration" />
          <h1>
            <motion.b whileInView={{ color: "orange" }}>Crafting</motion.b> Dynamic User Experiences
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileInView={{ color: "orange" }}>With</motion.b> React Excellence
          </h1>
          <button>DISCOVER MORE</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-End Development</h2>
          <div className="logos">
            <img src="./Html.png" alt="HTML" />
            <img src="./Css.png" alt="CSS" />
            <img src="./Javascript.png" alt="JavaScript" />
            <img src="./React.png" alt="React" />
            <img src="./Redux.png" alt="Redux" />
            <img src="./Bootstrap.png" alt="Bootstrap" />
            <img src="./Sass.png" alt="Sass" />
            <img src="./Tailwind.png" alt="Tailwind CSS" />
            <img src="./Mui.png" alt="Material-UI" />
            <img src="./FramerMotion.png" alt="Framer Motion" />
          </div>
          <p>
            ✔️ Build responsive and dynamic user interfaces with React, React Hooks, and Redux.
          </p>
          <p>
            ✔️ Expertise in HTML, CSS, Bootstrap, Tailwind, SASS, and Material UI.
          </p>
          <p>
            ✔️ Implement complex animations and interactions using Framer Motion.
          </p>
          <p>
            ✔️ Create and manage component libraries and design systems.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Back-End Development</h2>
          <div className="logos">
            <img src="./Node.js.png" alt="Node.js" />
            <img src="./Express.js.png" alt="Express.js" />
            <img src="./Mongodb.png" alt="MongoDB" />
            <img src="./Postgresql.png" alt="PostgreSQL" />
            <img src="./Axios.png" alt="Axios" />
          </div>
          <p>
            ✔️ Familiar with developing server-side applications using Node.js and Express.js.
          </p>
          <p>
            ✔️ Understand the basics of managing databases with MongoDB, PostgreSQL, and Mongoose.
          </p>
          <p>
            ✔️ Basic knowledge of creating and consuming RESTful APIs.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DevOps & Deployment</h2>
          <div className="logos">
            <img src="./Docker.png" alt="Docker" />
            <img src="./Jenkins2.png" alt="Jenkins" />
            <img src="./Kubernetes.png" alt="Kubernetes" />
          </div>
          <p>
            ✔️ Containerize applications using Docker.
          </p>
          <p>
            ✔️ Implement CI/CD pipelines with Jenkins.
          </p>
          <p>
            ✔️ Deploy applications using Kubernetes.
          </p>
          <p>
            ✔️ Ensure application scalability and reliability.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tools</h2>
          <div className="logos">
            <img src="./Github.png" alt="GitHub" />
            <img src="./Figma.png" alt="Figma" />
            <img src="./Slack.png" alt="Slack" />
            <img src="./Agile.png" alt="Agile" />
            <img src="./Uml.png" alt="UML" />
          </div>
          <p>
            ✔️ Proficient in version control using GitHub for collaborative software development.
          </p>
          <p>
            ✔️ Skilled in using Figma for creating interactive designs and prototypes.
          </p>
          <p>
            ✔️ Experienced in team communication and collaboration using Slack.
          </p>
          <p>
            ✔️ Follow Agile methodology and practices for project management and software development.
          </p>
          <p>
            ✔️ Design software using UML diagrams, including class and use case diagrams.
          </p>
          <button>Learn More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
