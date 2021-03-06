import React from "react";
import Title from "../components/Title";
import "../styles/sections/About.scss";
import { motion } from "framer-motion";
import { imageAnimation, reveal } from "../Animation";
import { useScroll } from "../components/useScroll";

function About() {
  const [element, controls] = useScroll();
  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="About Me 😎" color="blue" lineCenter={false} />
          <p>
            Hi! My name is Thomas and I study Commerce/Computer Science Student
            at UNSW. I am largely a self-taught developer and am always keen to
            learn new tools or languages to apply to my personal projects.
            Currently I am working as junior developer at a Startup called
            Qwokka where I get to practically apply my React and Typescript
            skills to develop and improve their website.
          </p>
          <p>
            Currently I am exploring web development (e.g. this website!)
            through React.js and mobile app development with React Native. I
            find full-stack development the most interesting at the moment; it
            is satisfying seeing and creating polished products with beautiful
            user interfaces.
          </p>
          <p>
            Outside of coursework, ou can also find me playing basketball,
            travelling or helping out at UNSW Investing For Charity as an IT
            officer.
          </p>
          <p>Here's my cat Theo in a box 🐱📦 ➡</p>
        </motion.div>
        <motion.div
          className="picture-container"
          animate={controls}
          variants={imageAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        ></motion.div>
      </div>
    </div>
  );
}

export default About;
