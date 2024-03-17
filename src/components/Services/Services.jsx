import React from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delay:0.1
    },
  },
};

const Services = () => {
  return (
    <motion.div className="services" variants={variants}>
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <p>
          I focus on helping your brand grow <br />
          and move forward.
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="title">
          <img src="people.webp"></img>
          <h1>
            <span>
              <b>Unique </b>
            </span>
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <span>
              <b>For your </b>
            </span>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="box">
          <h2>Frontend</h2>
          <p>
            Creating beautifull UI and UX experience with latest frontend
            technologies.
          </p>
          <a href="https://drive.google.com/file/d/1ZHAVVrT3_FLrKII8TZtaJKa9AQeMEasB/view?usp=sharing">
            {" "}
            <button>GO</button>
          </a>
        </div>
        <div className="box">
          <h2>Backend</h2>
          <p>
            Can handle the server side code as well with NodeJS, express server
            and javascript.
          </p>
          <a href="https://drive.google.com/file/d/1Prau9Fnyy5Pq9MRI9k9rNA-yLDLVJVKn/view?usp=sharing">
            <button>GO</button>
          </a>
        </div>
        <div className="box">
          <h2>Database</h2>
          <p>
            Experience in multiple databases like mongoDb, SQL, and redis for
            faster data retrieval.
          </p>
          <a href="https://drive.google.com/file/d/1VUSu4W19vQ---Gtw1iHJzBLsKEJr1vJ8/view?usp=sharing">
            <button>GO</button>
          </a>
        </div>
        <div className="box">
          <h2>Deploy</h2>
          <p>
            Knowledge of CI/CD pipelines, git, AWS and
            firebase for deployment and maintenance.
          </p>
          <a href="https://todo-list-react-redux-toolkit.web.app/">
            <button>GO</button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
