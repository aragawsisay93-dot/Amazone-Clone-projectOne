import React, { useRef } from "react";
import CatagoryFulldoc from "./CatagoryFulldoc";
import CatagoryCard from "./CatagoryCard";
import "./Catagory.css";

function Catagory() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="catagory-section">
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        &#10094;
      </button>

      <div className="catagory-scroll" ref={scrollRef}>
        {CatagoryFulldoc.map((doc, index) => (
          <CatagoryCard key={index} data={doc} />
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>
        &#10095;
      </button>
    </section>
  );
}

export default Catagory;
