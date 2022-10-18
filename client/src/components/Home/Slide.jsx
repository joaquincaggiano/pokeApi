// css
import classes from "./Home.module.css";

const Slide = (props) => {
  return (
    <div className={classes.containerImgs}>
      <a href={props.urlImg} target="_blank">
        <img
          className={classes.imgSlide}
          src={props.imgSlide}
          alt={props.nameImg}
        />
      </a>
    </div>
  );
};

export default Slide;
