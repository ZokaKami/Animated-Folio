import React from "react";
import Dzeljka from "../images/introImages/dzeljka.png";
import Star from "../images/introImages/star.png";
import Circle from "../images/introImages/circle.png";
import Eye from "../images/introImages/eye.png";
import { useEffect } from "react";
import gsap from "gsap";
import { useRef } from "react";
export default function Header() {
  const circleRef = useRef();
  const starOneRef = useRef();
  const starTwoRef = useRef();
  const eyeOneRef = useRef();
  const eyeTwoRef = useRef();
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const animations = [
        { selector: circleRef.current, xFactor: 15, yFactor: 15 },
        { selector: starOneRef.current, xFactor: 35, yFactor: 35 },
        { selector: starTwoRef.current, xFactor: 55, yFactor: 45 },
        { selector: eyeOneRef.current, xFactor: 3, yFactor: 3 },
        { selector: eyeTwoRef.current, xFactor: 3, yFactor: 3 },
      ];
      animations.forEach(({ selector, xFactor, yFactor }) => {
        gsap.to(selector, {
          x: (clientX / innerWidth - 0.5) * xFactor,
          y: (clientY / innerHeight - 0.5) * yFactor,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="relative h-[100vh]">
      <button
        onClick={() => {
          alert("You died");
        }}
        className="fixed top-[15%] left-[46%] border-2 border-yellow-400 w-[150px] h-[90px] rounded-full"
      >
        Enter
      </button>

      <img
        ref={circleRef}
        className="fixed bottom-0 md:left-[30vw] left-0 md:w-[50vw] xl:w-[40vw] w-[100vw]  "
        src={Circle}
        alt=""
      />
      <img
        className="fixed bottom-0 md:left-[35vw] left-[10vw] md:w-[40vw] xl:w-[30vw] w-[80vw] h-auto   "
        src={Dzeljka}
        alt=""
      />
      <img
        ref={starOneRef}
        className="fixed left-[60vw] md:left-[62vw] xl:left-[55vw] bottom-[45vw] md:bottom-[23vw] xl:bottom-[17vw] xl:w-[4vw] md:w-[5vw] w-[12vw]  "
        src={Star}
        alt=""
      />
      <img
        ref={starTwoRef}
        className="fixed left-[27vw] md:left-[44vw] xl:left-[42vw] bottom-[33vw] md:bottom-[16vw] xl:bottom-[12vw] xl:w-[3vw] md:w-[4vw] w-[7vw]  "
        src={Star}
        alt=""
      />

      <img
        ref={eyeOneRef}
        className="fixed left-[27vw] md:left-[44vw] xl:left-[47vw] bottom-[33vw] md:bottom-[16vw] xl:bottom-[16.4vw] xl:w-[1.4vw] md:w-[4vw] w-[7vw]  "
        src={Eye}
        alt=""
      />
      <img
        ref={eyeTwoRef}
        className="fixed left-[27vw] md:left-[44vw] xl:left-[51.6vw] bottom-[33vw] md:bottom-[16vw] xl:bottom-[16.5vw] xl:w-[1.4vw] md:w-[4vw] w-[7vw]  "
        src={Eye}
        alt=""
      />
    </div>
  );
}
