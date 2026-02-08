import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.css";
import { img } from "./img/data";

function MyCarousel() {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false}>
        {img.map((link, index) => (
          <img key={index} src={link} alt={`slide-${index}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
