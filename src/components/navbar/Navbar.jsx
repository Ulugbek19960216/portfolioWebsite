import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>

        <div className="wrapper">
            < motion.span
                initial={{opacity:0, scale: 0.5}}
                animate={{opacity:1, scale: 1}}
                transition={{duration: 0.5}}

            >Leo React Developer</motion.span>
            <div className="social">
                <a href="https://github.com/Ulugbek19960216"><img src="./Github.png"></img></a>
                <a href="https://leetcode.com/u/Ulugbek_Leo/"><img src="./leetcode.png"></img></a>
                <a href="https://www.linkedin.com/in/leo-sherov-346589215/"><img src="./linkedin.png"></img></a>
             
            </div>
        </div>
    
    </div>
  )
}

export default Navbar