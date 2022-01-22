import React, { useEffect, useRef, useState } from "react";

//import gsap from "gsap";
// import SplitText from "../../utils/Split3.min"

import "./style.scss";

const Header = () => {
  return (
    <section className="header-container">
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Art Oject</h1>
    </section>
  );
};

export default Header;
