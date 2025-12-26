import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.css"; 
import { img } from "./img/data";

function MyCarousel() {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imgItemLink, index) => (
          <img key={index} src={imgItemLink} alt={`slide-${index}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;

// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from "./Carousel.module.css";
// import { img } from "./img/data";

// function MyCarousel() {
//   return (
//     <div className={styles.carouselWrapper}>
//       <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false}>
//         {img.map((item, index) => (
//           <img key={index} src={item} alt={`slide-${index}`} />
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default MyCarousel;
