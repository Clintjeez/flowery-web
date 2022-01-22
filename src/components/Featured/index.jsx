import React from "react";
import photos from "../../Data";

import "./style.scss";

const Featured = () => {
  const [img1, img2] = photos;
  return (
    <section className="featured-section">
      <div className="featured-row-layout">
        <h6> green </h6>
        <img src={img1} />
      </div>
      <div className="featured-column-layout">
        <h6>Lily</h6>

        <img src={img2} />
      </div>
    </section>
  );
};

export default Featured;
