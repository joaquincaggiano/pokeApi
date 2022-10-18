// assets
import pikapika from "../../img/waving-pikachu.gif";
import imgArray from "../../exports/imgArray";

// Css
import classes from "./Home.module.css";

// Component
import Slide from "./Slide";

//Bootstrap
import { Carousel } from "react-bootstrap";

function Home() {

  return (
    <>
      <div className={classes.welcome}>
        <h1>Welcome Pokemon Master!</h1>
        <img src={pikapika} alt="pikachuGif" className={classes.pikachuGif} />
      </div>

      <Carousel>
        {imgArray.map((img, i) => {
          return (
            <Carousel.Item key={i}>
              <Slide
                imgSlide={img.imgSlide}
                nameImg={img.nameImg}
                urlImg={img.urlImg}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Home;
