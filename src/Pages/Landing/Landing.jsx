import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import MyCarousel from "../../Components/Carousel/MyCarousel";
import Catagory from "../../Components/Catagory/Catagory";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <>
      <MyCarousel />
      <Catagory />
      <Product />
    </>
  );
}

export default Landing;
