import React from "react";

const Popper = () => {
        gsap.from('.main-section img', { duration: 3, x: 100, opacity: 0 });
        gsap.from('.main-section span', { duration: 3, y: 100, opacity: 0 });
        gsap.from('.main-section .tagline', { duration: 3, x: -100, opacity: 0 });
}

export default Popper;