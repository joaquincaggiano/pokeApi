// Motion
import { motion } from "framer-motion";

// css
import classes from "./Home.module.css";

const Slide = (props) => {
  return (
    <motion.div className={classes.item}>
      <a href={props.urlImg} target="_blank">
        <img src={props.imgSlide} alt={props.nameImg} />
      </a>
    </motion.div>
  );
};

export default Slide;
